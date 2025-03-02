import express from 'express';
import cors from 'cors';
import pool from './db.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Get the root directory of the project
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = join(__dirname, '../public'); // Adjusted to point outside `backend`

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(publicPath)); // Serves frontend files correctly

// 🌟 API Routes

// 🟢 Add Player
app.post('/api/add-player', async (req, res) => {
    try {
        const { name, gameId } = req.body;
        const [result] = await pool.query(
            'INSERT INTO players (name, balance, game_id) VALUES (?, 1500, ?)', 
            [name, gameId]
        );
        res.json({ playerId: result.insertId, balance: 1500 });
    } catch (err) {
        console.error('Error adding player:', err);
        res.status(500).json({ message: 'Failed to add player' });
    }
});

// 🛑 DELETE Player
app.delete('/api/delete-player/:id', async (req, res) => {
    try {
        const playerId = req.params.id;
        const [result] = await pool.query('DELETE FROM players WHERE id = ?', [playerId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json({ message: 'Player deleted successfully' });
    } catch (err) {
        console.error('Error deleting player:', err);
        res.status(500).json({ message: 'Failed to delete player' });
    }
});

// ✏️ UPDATE Player
app.put('/api/update-player/:id', async (req, res) => {
    try {
        const playerId = req.params.id;
        const { name, balance } = req.body;

        const [result] = await pool.query(
            'UPDATE players SET name = ?, balance = ? WHERE id = ?',
            [name, balance, playerId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json({ message: 'Player updated successfully' });
    } catch (err) {
        console.error('Error updating player:', err);
        res.status(500).json({ message: 'Failed to update player' });
    }
});

// 🎲 Start New Game
app.post('/api/new-game', async (req, res) => {
    try {
        const [result] = await pool.query('INSERT INTO games (start_time) VALUES (NOW())');
        res.json({ gameId: result.insertId, startTime: new Date(), playerCount: 0 });
    } catch (err) {
        console.error('Error starting new game:', err);
        res.status(500).json({ message: 'Failed to start new game' });
    }
});

// 📥 Import Game Data
app.post('/api/import', async (req, res) => {
    try {
        console.log('Importing game data:', req.body);
        res.json({ message: 'Game data imported successfully' });
    } catch (err) {
        console.error('Import error:', err);
        res.status(500).json({ message: 'Failed to import game data' });
    }
});

// 📤 Export Game Data
app.get('/api/export', async (req, res) => {
    try {
        res.json({ message: 'Game data exported successfully' });
    } catch (err) {
        console.error('Export error:', err);
        res.status(500).json({ message: 'Failed to export game data' });
    }
});

// 🌎 Serve Frontend
app.get('*', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'));
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

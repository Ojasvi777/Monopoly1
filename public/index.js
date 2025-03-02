// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));

        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab') + 'Tab').classList.remove('hidden');
    });
});

// ✅ New Game Button
document.getElementById('newGameBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/new-game', { method: 'POST' });
        const data = await response.json();

        document.getElementById('gameId').textContent = data.gameId;
        document.getElementById('gameStartTime').textContent = data.startTime;
        document.getElementById('playerCount').textContent = data.playerCount;

        alert('New game started!');
    } catch (err) {
        console.error(err);
    }
});

// ✅ Delete Player (Attach to Buttons Dynamically)
document.getElementById('playersList').addEventListener('click', async (event) => {
    if (event.target.closest('.player-delete-btn')) {
        const playerId = event.target.closest('.player-delete-btn').dataset.player;

        const response = await fetch(`/api/delete-player/${playerId}`, { method: 'DELETE' });
        if (response.ok) {
            alert("Player deleted successfully");
            event.target.closest('.player-card').remove(); // Remove from UI
        } else {
            alert("Failed to delete player");
        }
    }
});

// ✅ Edit Player (Attach to Buttons Dynamically)
document.getElementById('playersList').addEventListener('click', async (event) => {
    if (event.target.closest('.player-edit-btn')) {
        const playerId = event.target.closest('.player-edit-btn').dataset.player;
        const newName = prompt("Enter new player name:");
        const newBalance = prompt("Enter new balance:");

        if (newName && newBalance) {
            const response = await fetch(`/api/update-player/${playerId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName, balance: parseInt(newBalance) })
            });

            if (response.ok) {
                alert("Player updated successfully");
                event.target.closest('.player-card').querySelector('h3').textContent = newName;
                event.target.closest('.player-card').querySelector('.player-cash').textContent = `$${newBalance}`;
            } else {
                alert("Failed to update player");
            }
        }
    }
});

// ✅ Add New Player (Now Saves to Database)
document.getElementById('addPlayerBtn').addEventListener('click', async () => {
    const name = prompt("Enter player name:");
    const gameId = document.getElementById('gameId').textContent; // Assuming gameId is displayed

    if (!name || !gameId) {
        alert("Invalid input or no game started!");
        return;
    }

    const response = await fetch('/api/add-player', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, gameId })
    });

    const data = await response.json();
    if (response.ok) {
        alert(`Player ${name} added!`);
        addPlayerToUI(data.playerId, name, data.balance);
    } else {
        alert("Failed to add player.");
    }
});

// ✅ Function to Add Player to UI
function addPlayerToUI(playerId, name, balance) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('card', 'player-card');
    playerCard.style.borderLeftColor = '#00b894';
    playerCard.innerHTML = `
        <div class="card-body">
            <div style="display: flex; justify-content: space-between;">
                <h3>${name}</h3>
                <div>
                    <button class="btn-secondary action-btn player-edit-btn" data-player="${playerId}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-danger action-btn player-delete-btn" data-player="${playerId}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem;">
                <div>
                    <strong>Cash:</strong> $<span class="player-cash">${balance}</span>
                </div>
                <div>
                    <strong>Position:</strong> <span class="player-position">Go (0)</span>
                </div>
                <div>
                    <strong>Status:</strong> <span class="player-status">Active</span>
                </div>
            </div>
        </div>
    `;
    document.getElementById('playersList').appendChild(playerCard);
}

// ✅ Export Game Data
document.getElementById('exportBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/export');
        const data = await response.json();
        console.log(data);
        alert('Game data exported to console.');
    } catch (err) {
        console.error(err);
    }
});

// ✅ Import Game Data
document.getElementById('importBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/import', {
            method: 'POST',
            body: JSON.stringify({ data: "importedData" }),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        console.log(data);
        alert('Game data imported.');
    } catch (err) {
        console.error(err);
    }
});

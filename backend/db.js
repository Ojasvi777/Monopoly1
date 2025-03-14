import { createPool } from 'mysql2/promise'; // Use 'mysql2' for better performance

const pool = createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: '',
  database: 'monopoly_tracker'
});

// Export query function
export const query = pool.query.bind(pool); // Bind query to the pool instance

export default pool;

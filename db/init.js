const pool = require("./pool");

exports.init = async () => {
  console.log("Checking the database structure...");

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usernames (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES usernames(id) ON DELETE CASCADE
      );
    `);

    console.log("The database is ready");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
};

const pool = require("./pool");

async function userSearch(name) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username = $1;",
    [name]
  );

  if (rows.length === 0) {
    const insert = await pool.query(
      "INSERT INTO usernames (username) VALUES ($1) RETURNING *;",
      [name]
    );
    return insert.rows[0];
  }

  return rows[0];
}

async function getAllMessages() {
  return await pool.query(
    "SELECT m.id, u.username, m.content, m.created_at FROM messages m JOIN usernames u ON m.user_id = u.id ORDER BY m.created_at DESC;"
  );
}

module.exports = {
  userSearch,
  getAllMessages,
};

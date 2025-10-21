const pool = require("./pool");

exports.userSearch = async (name) => {
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
};

exports.addComment = async (id, comment) => {
  await pool.query("INSERT INTO messages (user_id, content) VALUES ($1, $2)", [
    id,
    comment,
  ]);
};

exports.getAllMessages = async () => {
  const { rows } = await pool.query(
    "SELECT m.id, u.username, m.content, m.created_at FROM messages m JOIN usernames u ON m.user_id = u.id ORDER BY m.created_at DESC;"
  );

  rows.forEach(msg => {
    msg.created_at = new Date(msg.created_at).toLocaleString("ru-RU", {
      timeZone: "Europe/Kiev",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  });

  return rows;
};

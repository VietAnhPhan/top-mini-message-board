const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("select * from messages");
  return rows;
}

async function getMessageDetails(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);

  return rows[0];
}

async function createNewMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, text_message) VALUES (($1), ($2))",
    [username, message]
  );
}

module.exports = { getAllMessages, getMessageDetails, createNewMessage };

const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messageboard");
  return rows;
}

module.exports = {
    getMessages,
}
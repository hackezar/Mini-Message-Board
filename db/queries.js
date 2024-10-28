const {client} = require("./pg");

async function getMessages() {
  const res = await client.query("SELECT * FROM messageapp;")
  console.log(res);
  for (i=0; i<res.rows.length; i++) {
    console.log(res.rows[i].name);
  }
}

module.exports = {
    getMessages,
}
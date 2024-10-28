const client = require("./pool");

async function createTable() {
    try {
        await client.connect();
        await client.query(`CREATE TABLE messageBoard (
            name VARCHAR(255),
            email VARCHAR(255),
            age INT,
            message VARCHAR(255),
            time TIMESTAMPTZ,
            )
            `);
    } catch(e) {
        console.log(e);
    }
}

createTable();
const { Pool } = require("pg");

const dotenv = require('dotenv');
dotenv.config();

module.exports = new Pool({
    host: 'messageboard.c5wa4m8ko2i5.us-east-1.rds.amazonaws.com',
    user: 'jack',
    database: 'messageboard',
    password: `${process.env.PASSWORD}`,
    port: 5432,
});
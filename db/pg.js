const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();


const client = new Client({
    user: 'postgres',
    host: 'messageapp.c5wa4m8ko2i5.us-east-1.rds.amazonaws.com',
    database: 'messageapp',
    password: process.env.PASSWORD,
    port: 5432,

})
client.connect()
.then(() => console.log("connected to pg"))
.catch((e) => {
    console.log(`cant connect to pg: ${e}`)
})

module.exports={client};
const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
// The MongoClient is the object that references the connection to our
// datastore (Atlas, for example)
const uri = `mongodb+srv://jackhalcisak:${process.env.PASSWORD}@cluster0.wwajsji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const indexRoutes = require('./routes/indexRoutes');

// application-level middlewares, will always execute on every incoming requests
// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
console.log("App Run");

app.use("/", indexRoutes);
app.use("/new", indexRoutes);
app.use("/messages", indexRoutes);

let port = process.env.PORT;
if (port==null || port == "") {
    port = 8000;
}
app.listen(port, () => console.log(`Server running on port ${port}`));

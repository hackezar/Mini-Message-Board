const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const indexRoutes = require('./routes/indexRoutes');

// application-level middlewares, will always execute on every incoming requests
// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRoutes);
app.use("/new", indexRoutes);
app.use("/messages", indexRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log("Server running"));

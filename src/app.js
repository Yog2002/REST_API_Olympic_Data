const express = require("express");
const app = express();

const Runnig = require("./models/schema");

require("./db/connection");

const port = process.env.PORT || 8800;

app.get("/", (req,res) => {
    res.send("Hello");
})

app.listen(port, () => {
    console.log("Server is runnning on port 8800");
})
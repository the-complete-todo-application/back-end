// Initial imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Basic Server Setup
const server = express();
server.use(helmet())
server.use(express.json())
server.use(cors())

// Importing controllers

server.get("/", (req, res) => {
    res.send("Well, here we are, huh..?")
})

module.exports = server;
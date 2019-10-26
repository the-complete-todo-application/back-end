// Initial imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Basic Server Setup
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

// Importing controllers
//   -- Nothing yet!

server.get("/", (req, res) => {
    res.send("Well, here we are, huh..?");
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n***Listening on Port ${port}***\n`));

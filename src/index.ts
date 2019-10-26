// Initial imports
import cors from "cors";
import express from "express";
import helmet from "helmet";

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

const port = 5000;
// tslint:disable-next-line:no-console
server.listen(port, () => console.log(`\n***Listening on Port ${port}***\n`));

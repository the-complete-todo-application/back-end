// Initial imports
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";

// Controllers
import UserController from "./controllers/UserController";

// Basic Server Setup
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

// Importing controllers
server.use("/users", UserController);

server.get("/", (req, res) => {
    res.send("Well, here we are, huh..?");
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n***Listening on Port ${port}***\n`));

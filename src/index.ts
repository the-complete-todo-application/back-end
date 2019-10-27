// Initial imports
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";

// Controllers
import ListController from "./controllers/ListController";
import TodoController from "./controllers/TodoController";
import UserController from "./controllers/UserController";

// Basic Server Setup
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

// Importing controllers
server.use("/users", UserController);
server.use("/lists", ListController);
server.use("/todos", TodoController);

server.get("/", (req, res) => {
    res.send("Well, here we are, huh..?");
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n***Listening on Port ${port}***\n`));

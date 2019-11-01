// Initial imports
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";

// Controllers
import CategoryController from "./controllers/CategoryController";
import ListController from "./controllers/ListController";
import TodoController from "./controllers/TodoController";
import UserController from "./controllers/UserController";

// Error Handling
import errorHandler from "./middleware/errorHandler";

// Basic Server Setup
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

// Importing controllers
server.use("/categories", CategoryController);
server.use("/lists", ListController);
server.use("/todos", TodoController);
server.use("/users", UserController);

server.get("/", (req, res) => {
    res.send("Well, here we are, huh..?");
});

// Final 404
server.use("/", (req, res, next) => {
    res.locals.errStatus = 404;
    res.locals.details = "This endpoint seems to not exist!";
    next();
}, errorHandler);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n***Listening on Port ${port}***\n`));

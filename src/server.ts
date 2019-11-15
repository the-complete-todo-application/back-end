// Initial imports
import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import logger from "./middleware/logger";

// Controllers
import CategoryController from "./routes/CategoryRoute";
import ListController from "./routes/ListRoute";
import TodoController from "./routes/TodoRoute";
import UserController from "./routes/UserRoute";

// Error Handling
import { IBasicError } from "./interfaces/Error";
import errorHandler from "./middleware/errorHandler";

// Basic Server Setup
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

// Importing controllers
server.use("/categories", CategoryController);
server.use("/lists", ListController);
server.use("/todos", TodoController);
server.use("/users", UserController);

server.get("/", (req, res) => {
    res.send("Well, here we are, huh..?");
});

// Error Handling
server.use("/", (req: Request, res: Response, next: NextFunction) => {
    const error: IBasicError = {status: 404, details: "This endpoint doesn't exist! o.o"};
    next(error);
});
server.use(errorHandler);

export default server;

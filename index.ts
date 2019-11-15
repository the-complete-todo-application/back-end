// Initial imports
import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import logger from "./src/middleware/logger";

// Controllers
import CategoryController from "./src/routes/CategoryRoute";
import ListController from "./src/routes/ListRoute";
import TodoController from "./src/routes/TodoRoute";
import UserController from "./src/routes/UserRoute";

// Error Handling
import { IBasicError } from "./src/interfaces/Error";
import errorHandler from "./src/middleware/errorHandler";

// Basic Server Setup
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());
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

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n***Listening on Port ${port}***\n`));

import db from "../data/dbConfig";
import IUser from "../models/User";

export const findAll = () => {
    return db<IUser>("users");
};
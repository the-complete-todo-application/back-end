import db from "../configs/dbConfig";
import IUser from "../interfaces/User";

export const findAll = () => {
    return db<IUser>("users");
};

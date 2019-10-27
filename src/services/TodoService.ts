import db from "../configs/dbConfig"
import ITodo from "../models/Todo";

// Should not be public on production.
// Users should only be able to find lists that they have created.
export const findAll = () => {
    return db<ITodo>("todos");
};

export const findById = (todoid: string) => {
    return db<ITodo>("todos").where("id", "=", todoid);
};

export const findByList = (listid: string) => {
    return db<ITodo>("todos").where("list_id", "=", listid);
};

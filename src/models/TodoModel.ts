import db from "../configs/dbConfig";
import ITodo from "../interfaces/Todo";

// Should not be public on production.
// Users should only be able to find todos linked to a list they are looking at.
export const findAll = () => {
    return db<ITodo>("todos");
};

export const findById = (todoid: number) => {
    return db<ITodo>("todos").where("id", "=", todoid).first();
};

export const findByList = (listid: number) => {
    return db<ITodo>("todos").where("list_id", "=", listid);
};

import db from "../configs/dbConfig";
import ICategory from "../interfaces/Category";

// Should not be public on production.
// Users should only be able to see categories tied to a specific list.
export const findAll = () => {
    return db<ICategory>("categories");
};

export const findByListId = (listid: string) => {
    return db<ICategory>("categories").where("list_id", "=", listid);
};

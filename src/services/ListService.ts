import db from "../configs/dbConfig";
import IList from "../models/List";

// Should not be public on production.
// Users should only be able to find lists that they have created.
export const findAll = () => {
    return db<IList>("lists");
};

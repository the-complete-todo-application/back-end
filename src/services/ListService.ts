import db from "../configs/dbConfig";
import IList from "../models/List";
import IUserList from "../models/UserLists";

// Should not be public on production.
// Users should only be able to find lists that they have created.
export const findAll = () => {
    return db<IList>("lists");
};

export const findByListId = (listid: string) => {
    return db<IList>("lists")
        .where("id", "=", listid)
};

export const findByUserId = async (userid: string) => {
    const linkingArr = await db<IUserList>("userlists").where("user_id", "=", userid);

    const arrayOfListIds: number[] = linkingArr.map((userlist) => userlist.list_id);

    // Our desired SQL Query:
    // SELECT * FROM "lists" WHERE (id IN (...arrayOfListIds))
    //
    // In knex, we would type:
    return db<IList>("lists")
        .where((builder) => builder.whereIn("id", arrayOfListIds));
};

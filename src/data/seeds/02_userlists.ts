import IUserList from "../../models/UserLists";

const seedData: IUserList[] = [
    {user_id: 1, list_id: 1},
    {user_id: 1, list_id: 6},
    {user_id: 2, list_id: 2},
    {user_id: 4, list_id: 2},
    {user_id: 2, list_id: 3},
    {user_id: 4, list_id: 3},
    {user_id: 5, list_id: 3},
    {user_id: 2, list_id: 5},
    {user_id: 4, list_id: 4},
];

export const seed = (knex: any) => {
    return knex("lists").truncate()
        .then(() => knex("lists").insert(seedData));
});

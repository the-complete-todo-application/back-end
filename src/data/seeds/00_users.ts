import IUser from "../../models/User";

const seedData: IUser[] = [
    {email: "d@g.c", first_name: "Devin", password: "1234", last_name: "Var"},
    {email: "j@g.c", first_name: "John", password: "1234"},
    {email: "e@g.c", first_name: "Mary", password: "1234"},
    {email: "a@g.c", first_name: "Susan", password: "1234", last_name: "Mockery", color_primary: "FF0000"},
    {email: "b@g.c", first_name: "Alexander", password: "1234", last_name: "The Great"}
];

export const seed = (knex: any) => {
    return knex("users").truncate()
        .then(() => knex("users").insert(seedData));
};

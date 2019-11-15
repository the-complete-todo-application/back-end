import IList from "../../interfaces/List";

const seedData: IList[] = [
    {name: "Todos"},
    {name: "Groceries"},
    {name: "Chores", color_primary: "EEEEEE", color_secondary: "222222"},
    {name: "Hitman List"},
    {name: "Games to speedrun"},
    {name: "Todo Application"}
];

export const seed = (knex: any) => {
    return knex("lists").truncate()
        .then(() => knex("lists").insert(seedData));
};

import ICategory from "../../interfaces/Category";

export const seedData: ICategory[] = [
    {list_id: 3, name: "Pets", color_primary: "#775533"},
    {list_id: 3, name: "Home", color_primary: "#2244DD"},
    {list_id: 4, name: "Nintendo", color_primary: "#775533"},
    {list_id: 4, name: "Guns", color_primary: "#775533"}
];

export const seed = (knex: any) => {
    return knex("categories").truncate()
        .then(() => knex("categories").insert(seedData));
};

import ITodo from "../../models/Todo";

const seedData: ITodo[] = [
    {completed: false, list_id: 3, name: "Take out Trash", category_id: 2},
    {
        completed: false,
        list_id: 3,
        name: "Clean the dishes",
        description: "Hand wash and dishwasher, please!",
        category_id: 2
    },
    {completed: false, list_id: 3, name: "Walk the dog", description: "Clean up the poo poo", category_id: 1},
    {completed: false, list_id: 3, name: "Feed the fish", category_id: 1},
    {completed: false, list_id: 5, name: "Super Mario 64", description: "DO IT TODAY", due_date: new Date()},
    {completed: false, list_id: 4, name: "Donkey Kong", category_id: 3},
    {completed: false, list_id: 4, name: "Agent 47", category_id: 4}
];

export const seed = (knex: any) => {
    return knex("todos").truncate()
        .then(() => knex("todos").insert(seedData));
};

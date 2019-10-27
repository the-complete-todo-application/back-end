import ITodo from "../../models/Todo";

const seedData: ITodo[] = [
    {completed: false, list_id: 3, name: "Take out Trash"},
    {completed: false, list_id: 3, name: "Clean the dishes", description: "Hand wash and dishwasher, please!"},
    {completed: false, list_id: 3, name: "Walk the dog", description: "Clean up the poo poo"},
    {completed: false, list_id: 3, name: "Feed the fish"},
    {completed: false, list_id: 5, name: "Super Mario 64", description: "DO IT TODAY" due_date: new Date()},
    {completed: false, list_id: 4, name: "Donkey Kong"},
    {completed: false, list_id: 4, name: "Agent 47"}
];

export const seed = (knex: any) => {
    return knex("todos").truncate()
        .then(() => knex("todos").insert(seedData));
};

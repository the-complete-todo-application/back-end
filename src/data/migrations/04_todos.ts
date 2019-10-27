
export const up = (knex: any) => knex.schema.createTable("todos", (todo: any) => {
    todo.increments();
    todo.integer("list_id")
        .references("id")
        .inTable("lists")
        .notNullable();
    todo.string("name")
        .notNullable();
    todo.boolean("completed")
        .notNullable();
    todo.string("description");
    todo.date("due_date");
    todo.integer("category_id")
        .references("id")
        .inTable("categories");
});

export const down = (knex: any) => knex.schema.dropTableIfExists("todos");

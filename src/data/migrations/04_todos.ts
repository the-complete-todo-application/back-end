export const up = (knex: any) =>
  knex.schema.createTable("todos", (todo: any) => {
    todo.increments("id");
    todo
      .integer("list_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("lists")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    todo.string("name").notNullable();
    todo.boolean("completed").notNullable();
    todo.string("description");
    todo.date("due_date");
    todo
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });

export const down = (knex: any) => knex.schema.dropTableIfExists("todos");

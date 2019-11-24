export const up = (knex: any) =>
  knex.schema.createTable("categories", (category: any) => {
    category.increments("id");
    category
      .integer("list_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("lists")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    category.string("name").notNullable();
    category.string("color_primary");
    category.string("color_secondary");
  });

export const down = (knex: any) => knex.schema.dropTableIfExists("categories");

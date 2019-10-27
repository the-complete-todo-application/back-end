
export const up = (knex: any) => knex.schema.createTable("categories", (category: any) => {
    category.increments("id");
    category.integer("list_id")
        .references("id")
        .inTable("lists")
        .notNullable();
    category.string("name")
        .notNullable();
    category.string("color_primary");
    category.string("color_secondary");
});

export const down = (knex: any) => knex.schema.dropTableIfExists("categories");


export const up = (knex: any) => knex.schema.createTable("lists", (list: any) => {
    list.increments("id");
    list.string("name")
        .notNullable();
    list.string("color_primary");
    list.string("color_secondary");
    list.string("color_priority");
});

export const down = (knex: any) => knex.schema.dropTableIfExists("lists");

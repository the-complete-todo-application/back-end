
export const up = (knex: any) => knex.schema.createTable("userlists", (userlist: any) => {
    userlist.increments("id");
    userlist.integer("user_id")
        .references("id")
        .inTable("users")
        .notNullable();
    userlist.integer("list_id")
        .references("id")
        .inTable("lists")
        .notNullable();
});

export const down = (knex: any) => knex.schema.dropTableIfExists("userlists");



export const up = (knex: any) => knex.schema.createTable("users", (user: any) => {
    user.increments();
    user.string("email")
        .notNullable()
        .unique();
    user.string("password")
        .notNullable();
    user.string("first_name")
        .notNullable();
    user.string("last_name");
    user.string("color_primary");
    user.string("color_secondary");
});

export const down = (knex: any) => knex.schema.dropTableIfExists("users");

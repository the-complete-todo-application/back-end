export const up = (knex: any) =>
  knex.schema.createTable("userlists", (userlist: any) => {
    userlist.increments("id");
    userlist
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    userlist
      .integer("list_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("lists")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

export const down = (knex: any) => knex.schema.dropTableIfExists("userlists");

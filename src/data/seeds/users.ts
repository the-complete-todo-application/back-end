export const seed = (knex: any) => {
    return knex("users").del()
        .then(() => {
            return knex("users").insert([
                {email: "d@g.c", first_name: "Devin", last_name: "Var", password: "1234"}
            ]);
        });
};

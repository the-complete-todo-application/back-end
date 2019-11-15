import knex from "knex";

module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/data/todoData.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/data/migrations"
    },
    seeds: {
      directory: "./src/data/seeds"
    }
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "../data/migrations"
    },
    seeds: {
      directory: "../data/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

} as knex.Config;

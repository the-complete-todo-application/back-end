import knex from "knex";

/*
  Our knex config object needs to match the 
      knex.Config database.
  BUT, if we want to call the object using 
      bracket notation
      ( databaseConfig["development"] )
      then we need to specify an interface with
      [key: string]: {};

  The solution? Create an interface that extends
      our knex.Config, and also allows key access.
*/
interface IConfigObject extends knex.Config {
  [key: string]: {};
}

const databaseConfig: IConfigObject = {

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

};

export default databaseConfig;

module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./allData.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./dist/data/migrations"
    },
    seeds: {
      directory: "./dist/data/seeds"
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

}["development"];

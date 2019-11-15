import knex from "knex";
const knexConfig = require("../../knexfile");

const env = process.env.DB_ENV || "development";

export default knex(knexConfig[env]);

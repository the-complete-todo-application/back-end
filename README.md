# back-end
The back-end application. Node, Express, Knex, SQLite, PostgreSQL.

And of course, typescript.

## Scripts:

- **`npm start`** - Starts the server using `ts-node`.
- **`npm run devv`** - Starts the server in developer mode, using `ts-node-dev`.
- **`npm run tslint`** - Runs an auto linter over the full code, editing small things to make sure the code fits typescript principles.
- **`npm run migrate`** - Calls knex to run `migrate:latest` on the database.
- **`npm run seed`** - Calls knex to run seeds on the database.
- **`npm run migrate-testing`** - Calls knex to run migrations of the _testing_ database. If you plan to run any tests, make sure to run this to make sure you have a database file set up!
- **`npm test`** - Calls `ts-jest` to run any tests on the server using a test database

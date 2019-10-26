
// In order to access object properties using bracket notation,
// we need to specify this interface to Typescript knows that 
// Our keys are strings.
interface IConfig {
    [key: string]: any;
}

const config: IConfig = {
    development: {
        client: "sqlite3",
        migrations: {
            directory: "../data/migrations"
        },
        seeds: {
            directory: "../data/seeds"
        }
    }
};

export default config[ process.env.NODE_ENV || "development" ];

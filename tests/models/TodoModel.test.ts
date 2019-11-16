import db from "../../src/configs/dbConfig";
import { seedData as todoSeed } from "../../src/data/seeds/04_todos";
import * as TodoModel from "../../src/models/TodoModel";


beforeEach(async () => {
    await db("todos").truncate();
    await db("todos").insert(todoSeed);
});

test("We're in the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
});

describe("findById()", () => {
    test("Throws an error if no number given", () => {
        return TodoModel
                .findById(NaN)
                .then((resp) => console.log(resp))
                .catch((err) => {
                    console.log(err);
                });
    });
});

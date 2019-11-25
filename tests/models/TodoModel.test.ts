import db from "../../src/configs/dbConfig";
import { seedData as listSeed } from "../../src/data/seeds/01_lists";
import { seedData as todoSeed } from "../../src/data/seeds/04_todos";
import * as TodoModel from "../../src/models/TodoModel";

test("We're in the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
});

beforeEach(async () => {
    await db("todos").truncate();
    await db("lists").truncate();
    await db("lists").insert(listSeed);
    await db("todos").insert(todoSeed);
});


describe("findById()", () => {
    test("Returns empty if no number is given", async () => {
        
        const empty = await TodoModel.findById(NaN);

        expect(empty).toEqual(undefined);
    });
});

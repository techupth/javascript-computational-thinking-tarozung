import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 2", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function countVowels ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} \n return { countVowels }`;

    const func = new Function(code);
    const { countVowels } = func();

    expect(countVowels("Hello World")).toEqual(3);
    expect(countVowels("TechUp")).toEqual(2);
  });
});

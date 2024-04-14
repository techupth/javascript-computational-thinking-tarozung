import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 5", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function getLetterFrequency ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} \n return { getLetterFrequency }`;

    const func = new Function(code);
    const { getLetterFrequency } = func();

    const str = "Techupth";

    expect(getLetterFrequency(str)).toEqual({
      t: 2,
      e: 1,
      c: 1,
      h: 2,
      u: 1,
      p: 1,
    });
  });
});

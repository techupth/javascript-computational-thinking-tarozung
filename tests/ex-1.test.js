import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 1", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function addNumbers ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} \n return { addNumber }`;

    const func = new Function(code);
    const { addNumber } = func();

    let numbers = [10, 20, 30];
    let anotherNumbers = [2, 4, 6];

    expect(addNumber(numbers, 10)).toEqual([20, 30, 40]);
    expect(addNumber(anotherNumbers, 2)).toEqual([4, 6, 8]);
  });
});

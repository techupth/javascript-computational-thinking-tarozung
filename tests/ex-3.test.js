import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 3", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function getMostExpensiveProduct ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} \n return { getMostExpensiveProduct }`;

    const func = new Function(code);
    const { getMostExpensiveProduct } = func();

    const products = [
      { name: "Laptop", price: 1000 },
      { name: "Smartphone", price: 700 },
      { name: "Tablet", price: 500 },
      { name: "Headphones", price: 300 },
      { name: "Keyboard", price: 50 },
    ];

    expect(getMostExpensiveProduct(products)).toEqual({
      name: "Laptop",
      price: 1000,
    });
  });
});

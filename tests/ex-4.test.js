import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 4", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function findMoviesByYear ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} \n return { findMoviesByYear }`;

    const func = new Function(code);
    const { findMoviesByYear } = func();

    const movies = [
      {
        title: "The Shawshank Redemption",
        releaseDate: "1994-10-14",
        genre: "Drama",
      },
      { title: "The Godfather", releaseDate: "1972-03-24", genre: "Crime" },
      {
        title: "The Godfather: Part II",
        releaseDate: "1974-12-20",
        genre: "Crime",
      },
      { title: "The Dark Knight", releaseDate: "2008-07-16", genre: "Action" },
      { title: "Pulp Fiction", releaseDate: "1994-10-14", genre: "Crime" },
    ];

    expect(findMoviesByYear(movies, 1994)).toEqual([
      {
        title: "The Shawshank Redemption",
        releaseDate: "1994-10-14",
        genre: "Drama",
      },
      { title: "Pulp Fiction", releaseDate: "1994-10-14", genre: "Crime" },
    ]);
  });
});

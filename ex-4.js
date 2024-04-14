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

function findMoviesByYear(movies, year) {
  // Start coding here
}

console.log(findMoviesByYear(movies, 1994));

/* Output:
[
  { title: "The Shawshank Redemption", releaseDate: "1994-10-14", genre: "Drama" },
  { title: "Pulp Fiction", releaseDate: "1994-10-14", genre: "Crime" }
]
*/

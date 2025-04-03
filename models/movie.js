import { randomUUID } from "node:crypto";
import { findIndexById, readJSON } from "../utils.js";

const movies = readJSON("./movies.json");

export class MovieModel {
  static getAll = async ({ genre }) => {
    if (genre) {
      return movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
    }
    return movies;
  };

  static getById = async ({ id }) => {
    const movie = movies.find((movie) => movie.id === id);
    return movie;
  };

  static create = async ({ input }) => {
    const newMovie = {
      id: randomUUID(),
      ...input,
    };

    movies.push(newMovie);

    return newMovie;
  };

  static delete = async ({ id }) => {
    const movieIndex = findIndexById({ id, arr: movies });
    movies.splice(movieIndex, 1);
    return true;
  };

  static update = async ({ id, input }) => {
    const movieIndex = findIndexById({ id, arr: movies });
    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input,
    };
    return movies[movieIndex];
  };
}

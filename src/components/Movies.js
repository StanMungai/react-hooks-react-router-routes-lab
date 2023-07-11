import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map((movie) => {
        return (
          <div>
            {movie.title}
            {movie.time}
            { movie.genres.map((genre) => {
              return (
                <ul>
                  <li>{genre}</li>
                </ul>
              )
            }) }
          </div>
        )
      }) }
    </div>
  );
}

export default Movies;

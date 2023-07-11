import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div>
            {actor.name}
            {actor.movies.map(movie => {
              return (
                <ul>
                  <li>{movie}</li>
                </ul>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Actors;

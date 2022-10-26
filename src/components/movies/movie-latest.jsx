import React from "react";
import filmsData from "../../data/films";
import MovieCard from "./movie-card";

const MovieLatest = () => {

  filmsData.sort((a, b) => b.year - a.year)

  return (
    <div className="container">
      <h1>Latest Films</h1>
      <div className="film-list">
        {filmsData.slice(0, 3).map((film) => (
          <MovieCard filmData={film} key={film.id}/>
        ))}
      </div>
    </div>
  );
};

export default MovieLatest;

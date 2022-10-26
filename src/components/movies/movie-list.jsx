import React from "react";
import filmsData from "../../data/films";
import MovieCard from "./movie-card";
import './style.css'

const MovieList = () => {
  return (
    <div className="container">
      <h1>Films</h1>
      <div className="film-list">
        {filmsData.map((film) => (
          <MovieCard filmData={film} key={film.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

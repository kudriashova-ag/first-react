import React, { useContext } from "react";
import FilmContext from "../../contexts/filmContext";
import MovieCard from "./movie-card";

const MovieLatest = () => {
  const [films] = useContext(FilmContext);

  const newFilms = [...films];
  newFilms.sort((a, b) => b.year - a.year);

  return (
    <div className="container">
      <h1>Latest Films</h1>
      <div className="film-list">
        {newFilms.slice(0, 3).map((film) => (
          <MovieCard filmData={film} key={film.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieLatest;

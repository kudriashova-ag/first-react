import React, { useContext, useState } from "react";

import MovieCard from "./movie-card";
import MovieCreateFrom from "./movie-create-from";
import MovieCreateModal from "./movie-create-modal";
import _ from "lodash";

import './style.css'
import FilmContext from "../../contexts/filmContext";

const MovieList = () => {
  const [films, setFilms] = useContext(FilmContext);

  const removeFilm = (id) => {
    const newFilms = films.filter((film) => film.id !== id);
    setFilms(newFilms);
    localStorage.setItem("films", JSON.stringify(newFilms));
  };

  const addFilm = (film) => {
    const newFilms = [...films, film];
    setFilms(newFilms);
    localStorage.setItem("films", JSON.stringify(newFilms));
  };

  const updateFilm = (updatedFilmData) => {
    const newFilms = _.cloneDeep(films);
    const film = newFilms.find((f) => f.id === updatedFilmData.id);
    Object.assign(film, updatedFilmData);
    setFilms(newFilms);
    localStorage.setItem("films", JSON.stringify(newFilms));
  };

  return (
    <div className="container">
      <h1>Films</h1>
      <MovieCreateModal />
      <div className="film-list">
        {films.map((film) => (
          <MovieCard
            filmData={film}
            removeFilm={removeFilm}
            updateFilm={updateFilm}
            key={film.id}
          />
        ))}
      </div>
      <MovieCreateFrom addFilm={addFilm} />
    </div>
  );
};

export default MovieList;
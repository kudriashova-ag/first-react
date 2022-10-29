import React, { useState } from 'react';
import MovieEditModal from './movie-edit-modal';
import { DeleteOutlined } from "@ant-design/icons";

const MovieCard = ({ filmData, removeFilm, updateFilm }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="film">
      <img src={filmData.image} alt={filmData.name} />
      <div className="film-name">
        {filmData.name}, {filmData.year}
      </div>
      {showDetails ? (
        <div>
          <p>Director: {filmData.director}</p>
          <p>{filmData.description}</p>
        </div>
      ) : (
        ""
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide" : "Show"} More...
      </button>

      <button onClick={() => removeFilm(filmData.id)}>
        <DeleteOutlined />
      </button>

      <MovieEditModal film={filmData} updateFilm={updateFilm} />
    </div>
  );
};

export default MovieCard;

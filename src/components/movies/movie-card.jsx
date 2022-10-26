import React from 'react';

const MovieCard = ({filmData}) => {
 
  return (
    <div className="film">
      <img src={filmData.image} alt={filmData.name} />
      <div className="film-name">{filmData.name}, {filmData.year}</div>
    </div>
  );
}

export default MovieCard;


import './App.css';
import Example from './components/example';
import MovieLatest from './components/movies/movie-latest';
import MovieList from './components/movies/movie-list';
import filmsData from "./data/films";
import { useState } from 'react';
import FilmContext from './contexts/filmContext';

function App() {
  const [films, setFilms] = useState(JSON.parse(localStorage.getItem('films')) || filmsData);


  return (
    <div>
      <FilmContext.Provider value={[films, setFilms]}>
        <MovieList />
        <MovieLatest />
      </FilmContext.Provider>
    </div>
  );
}

export default App;

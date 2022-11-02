
import './App.css';
import Example from './components/example';
import MovieLatest from './components/movies/movie-latest';
import MovieList from './components/movies/movie-list';
import filmsData from "./data/films";
import { useState } from 'react';
import FilmContext from './contexts/filmContext';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PostList from './pages/PostList';
import PostSingle from './pages/PostSingle';


function App() {
  const [films, setFilms] = useState(JSON.parse(localStorage.getItem('films')) || filmsData);


  return (
    <FilmContext.Provider value={[films, setFilms]}>
      <Header/>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path="/latest" element={<MovieLatest />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostSingle />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </FilmContext.Provider>
  );
}

export default App;

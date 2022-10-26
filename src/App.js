import './App.css';
import Example from './components/example';
import MovieLatest from './components/movies/movie-latest';
import MovieList from './components/movies/movie-list';

function App() {
  return (
    <div>
      <Example />
      <MovieList />
      <MovieLatest/>
    </div>
  );
}

export default App;

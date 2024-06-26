import { useState, useEffect }  from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//201d9943
const App = () => {
  const API_URL = 'http://www.omdbapi.com?apikey=201d9943';
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Smile');
  }, []);
  return (
    <div className="App">
      <div className="sitetitle">
      <h1>MOVIEHUB</h1>
      </div>
      <div className="searchbar">
        <div className="search">
          <input 
            placeholder='Search for movies'
            value ={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
            src={SearchIcon} 
            alt="search" 
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {movies?.length > 0
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;

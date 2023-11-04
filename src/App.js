import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SearchBar from './components/SearchBar';
import MyList from './components/MyList';

function App() {

  const [movies, setMovies] = useState( [] );
  const [searchVar, setSearchVar] = useState( '' );

  const getMovie = async(searchVar) => {
    const url = `http://www.omdbapi.com/?s=${searchVar}&apikey=8e7e1c71`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  // on load get api request of static url
  useEffect(() => {
    getMovie(searchVar);
  }, [searchVar]);

  return (
    <div className='container-fluid movie-list'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieHeader heading='Movies' />
        <SearchBar searchValue={searchVar} setSearchValue={setSearchVar} />
      </div>
      <div className='row'>
        <MovieList movies = {movies} listComponent={MyList} />
      </div>
    </div>
  
  );
}

export default App;

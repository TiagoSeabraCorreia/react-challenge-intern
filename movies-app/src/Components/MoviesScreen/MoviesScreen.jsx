import React from 'react';
import './css.css';
import SearchBar from '../SearchBar/Searchbar';
import MoviesList from '../MoviesList/MoviesList';
const MoviesScreen = (props) => {

  return (
    <div>
      <SearchBar handleMovieSearch = {props.handleMovieSearch}>
      </SearchBar>
      <MoviesList movies = {props.movies}>
      </MoviesList>
    </div>
  );
  
};

export default MoviesScreen;
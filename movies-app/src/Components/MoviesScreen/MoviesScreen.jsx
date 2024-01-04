import React from 'react';
import './css.css';
import SearchBar from '../SearchBar/Searchbar';
import MoviesList from '../MoviesList/MoviesList';
import Pagination from '../Pagination/Pagination';
import Error from '../ErrorMessage/ErrorMessage';


//Screen for the movies list
const MoviesScreen = (props) => {
  return (
    <div>
      <Error errorMessage = {props.errorMessage} ></Error>
      <SearchBar 
        search = {props.search}
        handleSearchChange = {props.handleSearchChange} 
        handleMovieSearch = {props.handleMovieSearch}>
      </SearchBar>
      <MoviesList movies = {props.movies}>
      </MoviesList>
      
      <Pagination  
        handlePageChange={props.handlePageChange} 
        currentPage = {props.currentPage} 
        totalPages={props.totalPages}
      />
    </div>
  );
};

export default MoviesScreen;
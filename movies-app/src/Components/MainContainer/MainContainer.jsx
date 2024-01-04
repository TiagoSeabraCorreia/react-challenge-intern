import React, { useState } from 'react';
import './css.css'
import MovieInfo from '../MovieInfo/MovieInfo';
import MoviesScreen from '../MoviesScreen/MoviesScreen';
import '../../utils.js';
import { options } from '../../utils.js';
import axios from 'axios';
import { useEffect } from 'react';
import { Movie } from '../../utils.js';

const MainContainer = (props) => {
  //state for the array of movies
  const [movies, setMovies] = useState([]);
  //state for the search string
  const [search , setSearch] = useState("");
  //state for the error message
  const [errorMessage , setErrorMessage] = useState("");

  //when the component is first created we fetch the data
  //from the TMDB api
  useEffect(() => {
    handleMovieSearch();
  }, [props.currentPage]);

  /**
   * 
   * @param {string} nameFilter 
   * function to fetch the data from the API
   * -> axios to process the request
   * -> the options obeject is the request
   */

  const handleMovieSearch = () => {
    var aux = [];
    var moviesData = []; 
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page='+props.currentPage;
    options.url = url;
    axios.request(options)
      .then(function (response) {
        moviesData = response.data;
        //console.log(moviesData);
        props.handlePageChanges(moviesData.total_pages)
        moviesData.results.forEach ((movie) => {
          if(movie.original_title.includes(search) === true){
            var currentMovie = new Movie(
              movie.original_title, 
              movie.poster_path, 
              movie.release_date, 
              movie.id);
            //console.log(currentMovie);
            aux.push(currentMovie)  
          }
        })
        setMovies(aux)
      })
      .catch(function (error) {
        setErrorMessage(error);
      });
  }

  //function to handle the string change
  const handleSearchChange = (str) => {
    setSearch(str);
  }

  return ( 
    <div className='main-container'>
        <MoviesScreen
          errorMessage = {errorMessage}
          handleSearchChange  = {handleSearchChange}
          search = {search}
          currentPage = {props.currentPage}
          totalPages = {props.totalPages}
          movies = {movies} 
          handleMovieSearch = {handleMovieSearch}
          handlePageChange = {props.handlePageChange}
         />
    </div>
  );
};

export default MainContainer;
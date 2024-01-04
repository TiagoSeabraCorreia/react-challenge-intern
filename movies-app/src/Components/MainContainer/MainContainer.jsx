import React, { useState } from 'react';
import './css.css'
import MovieInfo from '../MovieInfo/MovieInfo';
import MoviesScreen from '../MoviesScreen/MoviesScreen';
import '../../utils.js';
import { options } from '../../utils.js';
import axios from 'axios';
import { useEffect } from 'react';
import { Movie } from '../../utils.js';

const MainContainer = ({}) => {
  //state for the array of movies
  const [movies, setMovies] = useState([]);
  //state for the total of pages available for the pagination
  const [totalPages, setTotalPages] = useState(0);
  //state for the number of the current page
  const [currentPage, setCurrentPage] = useState(1);
  //state for the search string
  const [search , setSearch] = useState("");
  //state for the error message
  const [errorMessage , setErrorMessage] = useState("");

  //when the component is first created we fetch the data
  //from the TMDB api
  useEffect(() => {
    handleMovieSearch();
  }, [currentPage]);

  /**
   * Function to handle the page change, it is necessary to make sure the
   * page number exists
   * 
   * @param {number} pageIncrement 
   */
  const handlePageChange = (increment) =>{
    if((currentPage + increment) > 0 && (currentPage + increment) <= totalPages)
      setCurrentPage(currentPage + increment);
  }

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
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page='+currentPage;
    options.url = url;
    axios.request(options)
      .then(function (response) {
        moviesData = response.data;
        //console.log(moviesData);
        setTotalPages(moviesData.total_pages)
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
          currentPage = {currentPage}
          totalPages = {totalPages}
          movies = {movies} 
          handleMovieSearch = {handleMovieSearch}
          handlePageChange = {handlePageChange}
         />
    </div>
  );
};

export default MainContainer;
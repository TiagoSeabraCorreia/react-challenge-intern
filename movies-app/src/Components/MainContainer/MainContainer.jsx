import React, { useState } from 'react';
import './css.css'
import MovieInfo from '../MovieInfo/MovieInfo';
import MoviesScreen from '../MoviesScreen/MoviesScreen';

class Movie{

  /**
   * 
   * @param {string} title 
   * @param {string} imgUrl 
   * @param {string} launchDate 
   */

  constructor (title, imgUrl, launchDate){
    this.title = title;
    this.imgUrl = imgUrl;
    this.launchDate = launchDate;
  }

  /**
   * 
   * @param {string} str
   * @returns {boolean}
   */
  matchesFilter(str){
    console.log(this.title.includes(str))
    return this.title.includes(str);
  }
}

const repo = [
  new Movie("Filme numero 1","https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*","10-10-2002"),
  new Movie("Filme numero 2","https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*","10-10-2002"),
  new Movie("Filme numero 3","https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*","10-10-2002")
]

const MainContainer = (props) => {

  const [movies, setMovies] = useState(repo)

  /**
   * 
   * @param {string} nameFilter 
   */

  const handleMovieSearch = (nameFilter) => {
    console.log(nameFilter)
    var aux = [];
    setMovies(aux);
    repo.forEach (movie => {
      if(movie.title.includes(nameFilter) === true){
        aux.push(movie)
      }
    })

    setMovies(aux)
  }
  return (
    <div className='main-container'>
        <MoviesScreen movies = {movies} handleMovieSearch = {handleMovieSearch}>
        </MoviesScreen>
        <MovieInfo>
        </MovieInfo>
    </div>
  );
};
export default MainContainer;
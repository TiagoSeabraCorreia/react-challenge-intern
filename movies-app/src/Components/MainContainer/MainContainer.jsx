import React, { useState } from 'react';
import './css.css'
import MovieInfo from '../MovieInfo/MovieInfo';
import MoviesScreen from '../MoviesScreen/MoviesScreen';
import '../../utils.js';
import { getData } from '../../utils.js';

class Movie{
  /**
   * 
   * @param {string} title 
   * @param {string} imgUrl 
   * @param {string} launchDate 
   * @param {boolean} featured
   */

  constructor (title, imgUrl, launchDate, featured){
    this.title = title;
    this.imgUrl = imgUrl;
    this.launchDate = launchDate;
    this.featured = featured;
  }
}


//Repository of data to test all the functions and logic and only
// in the end we switch to API to get application data

const repo = [
  new Movie(
    "Filme numero 1",
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
    "10-10-2002",
    true),
    new Movie(
      "Filme numero 2",
      "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
      "10-10-2002",
      false),  
      new Movie(
        "Filme numero 3",
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
        "10-10-2002",
        false),
        new Movie(
          "Filme numero 4",
          "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
          "10-10-2002",
          false),
          new Movie(
            "Filme numero 5",
            "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
            "10-10-2002",
            false),  
            new Movie(
              "Filme numero 6",
              "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
              "10-10-2002",
              false),new Movie(
                "Filme numero 7",
                "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
                "10-10-2002",
                false),
                new Movie(
                  "Filme numero 8",
                  "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
                  "10-10-2002",
                  false),  
                  new Movie(
                    "Filme numero 9",
                    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
                    "10-10-2002",
                    false),
                    new Movie(
                      "Filme numero 10",
                      "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
                      "10-10-2002",
                      false),
                      new Movie(
                        "Filme numero 11",
                        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
                        "10-10-2002",
                        false),  
                        new Movie(
                          "Filme numero 12",
                          "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*",
                          "10-10-2002",
                          false)]



const MainContainer = (props) => {

  const [movies, setMovies] = useState(repo)

  /**
   * 
   * @param {string} nameFilter 
   */

  const handleMovieSearch = (nameFilter) => {
    //console.log(nameFilter)
    var aux = [];

    console.log(getData());

    repo.forEach ((movie, index) => {
      if(movie.title.includes(nameFilter) === true){
        if(index % 7 === 0) movie.featured = true;
        aux.push(movie)
      }
    })

    setMovies(aux)

  }

  console.log(movies);

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
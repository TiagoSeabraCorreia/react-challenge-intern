import React, { useState } from 'react';
import './css.css'
import { useNavigate, useParams } from 'react-router-dom';
import { options, MovieWithInfo, Movie} from '../../utils';
import { useEffect } from 'react';
import axios from 'axios';
import GenreGummies from './GenreGummies/GenreGummies';
import LikeButton from '../LikeButton/LikeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';



const MovieInfo  = () => {
  //useParams(); to get the movieId from the url
  const { movieId } = useParams();
  //state for the selected movie
  const [myMovie, setMyMovie] = useState(null);
  //state of the loading message
  const [isLoading, setLoading] = useState(true);
  //navigator so we can move from route to route
  const navigator = useNavigate();

  //handler for the back button
  function handleGoBack (event){
    navigator("/");
  }

  //auxiliary function to get the array of the genres
  function getGenres(genres){
    var ret = [];
    genres.forEach(element => {
      ret.push(element.name);
    });
    console.log(ret);
    return ret;
  }

  //we fetch the data of the selected movie when the component is created
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US';
    options.url = url;
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      const genres = getGenres(response.data.genres); 
      var myMovieWithInfo = new MovieWithInfo(
        response.data.original_title,
        response.data.poster_path,
        response.data.release_date,
        response.data.id,
        genres,
        response.data.vote_average,
        response.data.overview
      );

      setMyMovie(myMovieWithInfo);
      setLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    })
  }, []);

    //if the content is beeing fetched we show a message
    if(isLoading) return (
        <h1 className='fetching'>Fetching data!</h1>
    );

    return (
      <div className='info-page'>
        <div className="image-container">
          <div className="go-back-container">
            <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} size='2x'/>        
          </div>
          <img src = {myMovie.imgUrl} ></img>
          <div className = "rating-container">
            <FontAwesomeIcon className='start-icon' icon={faStar}/>
            <div className='rating-text'> {myMovie.rating} </div>        
          </div>
        </div>
        <div className='information-container'>
          <div className = 'info-page-title'>
            {
              myMovie.title
            }
          </div>
          <div className = 'info-page-date'>
            {
              myMovie.launchDate
            }
          </div>
          <div className='info-page-overview'>
            {myMovie.overview}
          </div>
          <GenreGummies genres = {myMovie.genres} />
          <LikeButton movieId = {myMovie.id} />
        </div>
      </div>
    );
};

export default MovieInfo;

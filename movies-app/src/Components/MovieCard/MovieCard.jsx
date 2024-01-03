import React from 'react';
import './css.css';
import NormalMovieCard from '../NormalMovieCard/NormalMovieCard';
import FeaturedMovieCard from '../FeaturedMovieCard/FeaturedMovieCard';

const MovieCard = (props) => {
    const myMovie = props.myMovie;
    if(myMovie.featured === true)
        return <FeaturedMovieCard myMovie = {myMovie}/>
    else
        return <NormalMovieCard myMovie = {myMovie}/>
    
};
export default MovieCard;
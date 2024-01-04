import React from 'react';
import './css.css';
import NormalMovieCard from '../NormalMovieCard/NormalMovieCard';

const MoviesList = (props) => {
    return (
        <div className='movies-container'>
            {
                //a card is created for every movie that is in our data
                props.movies.map((movie, index) => (
                    <NormalMovieCard page={props.currentPage} key = {index} myMovie = {movie}/>
                ))
            }
        </div>
    );
};

export default MoviesList;
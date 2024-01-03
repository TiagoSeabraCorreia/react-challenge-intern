import React from 'react';
import './css.css';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = (props) => {
    return (
        <div className='movies-container'>
            {
                props.movies.map((movie, index) => (
                    <MovieCard key = {index} myMovie = {movie}/>
                ))
            }
        </div>
    );
};
export default MoviesList;
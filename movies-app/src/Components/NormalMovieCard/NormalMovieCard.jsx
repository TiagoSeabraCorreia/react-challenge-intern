import React from 'react';
import './css.css';

const NormalMovieCard = (props) => {
    const myMovie = props.myMovie;
    return (
        <div className = 'movie-card-holder'>
            <div className='movie-card'>
            <div className='title'>
                {myMovie.title}
            </div>
            <img src={myMovie.imgUrl} />
            </div>
        </div>
        
    );
};

export default NormalMovieCard;
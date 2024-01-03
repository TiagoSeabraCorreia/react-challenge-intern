import React from 'react';
import './css.css';

const FeaturedMovieCard = (props) => {
    const myMovie = props.myMovie;
    return (
        <div className = 'movie-card-featured'>
            <div className='title'>
                {myMovie.title}
            </div>
            <img src={myMovie.imgUrl} />
        </div>
    );
};

export default FeaturedMovieCard;
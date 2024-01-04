import React from 'react';
import './css.css';
import { useNavigate } from "react-router-dom";

function NormalMovieCard (props) {
    
    const myMovie = props.myMovie; 
    const navigator = useNavigate();

    //handler to change the route when a movie card is clicked
    const handleMovieClick  = (event) => {
        navigator("movieInfo/"+myMovie.id+"&page="+props.page);
    }

    return (
        <div className='movie-card'>
            <div className='normal-title'>
                {myMovie.title}
            </div>
            <div className='date'>
                {myMovie.launchDate}
            </div>
            <div className = 'image-holder'>
                <img src={myMovie.imgUrl} onClick={handleMovieClick}/>
            </div>
        </div>
    );

};

export default NormalMovieCard;
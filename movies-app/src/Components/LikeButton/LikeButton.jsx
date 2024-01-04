import React, { useState } from 'react';
import './css.css'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {faHeart as regular} from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react';

const LikeButton  = (props) => {

    //use effect to load the data when when the 
    //component is first created

    useEffect(() => {
        loadData();
    }, []);

    //state for the movie like
    const [movieIsLiked, setMovieIsLiked] = useState("");

    /* we use the promise object to save the
    like to the local data asynchronously
    */
    const handleLike = (event) =>{
        Promise.resolve().then( 
            function () {
                var newValue = false;
                if(movieIsLiked === "true")
                    newValue = "false";
                else{
                    newValue = "true";
                }
                localStorage.removeItem(""+props.movieId)
                localStorage.setItem(""+props.movieId, newValue);
                setMovieIsLiked(newValue)
            }
        )
    } 


    /* we use the Promise object to make the loading of the local
    data async  */
    const loadData = () =>{
        Promise.resolve().then( 
            function () {
                const like = localStorage.getItem("" + props.movieId);
                setMovieIsLiked(like);
            }
        )
    }
    
    //If the movie is liked by the user we show the filled heart
    //else we show the empty heart
    if(movieIsLiked === "true"){
        return (
            <div className = 'like-button-container'>
                <FontAwesomeIcon icon={faHeart} onClick={handleLike} className="pointer" size='5x'/>        
            </div>
        );
    }else{
        return (
            <div className = 'like-button-container'>
                <FontAwesomeIcon icon={regular}  onClick={handleLike} className="pointer" size='5x'/>        
            </div>
        );
    }
};

export default LikeButton;
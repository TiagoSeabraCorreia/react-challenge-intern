import React from 'react';
import './css.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    const [movieName, setMovieName] = useState("")

    const handleTyping = (event) => {
        setMovieName(event.target.value)
    }

    const handleSearch = () => {
        props.handleMovieSearch(movieName)
    }

    // Some logic or data
    return (
        <div className='search-bar-container'>

        <div className='search-bar'>

            <div className='text-field-container'>
                <input type='text' onChange={handleTyping} value={movieName} className = 'text-field' placeholder='Search for a movie...'/>
            </div>

            <div className='icon' onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} size='2x'/>        
            </div>
        </div>

        </div>
    );
};

export default SearchBar;
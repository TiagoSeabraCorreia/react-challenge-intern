import React from 'react';
import './css.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {

    //Handler to change the value when the user types
    const handleTyping = (event) => {
        props.handleSearchChange(event.target.value);
    }


    //Handler to search for new movies
    const handleSearch = () => {
        props.handleMovieSearch()
    }


    return (
        <div className='search-bar-container'>

        <div className='search-bar'>

            <div className='text-field-container'>
                <input type='text' onChange={handleTyping} value={props.search} className = 'text-field' placeholder='Search for a movie...'/>
            </div>
            
            <div className='icon' onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} size='2x'/>        
            </div>
        </div>

        </div>
    );
};

export default SearchBar;
import React from 'react';
import './css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/Searchbar';

const MoviesList = (props) => {
    return (
        <div>
            {
                props.movies.map((item, index) => (
                    <div key={index}>
                        {item.title}
                    </div>
                ))
            }
        </div>
    );
};

export default MoviesList;
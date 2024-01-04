import React from 'react';
import Gummie from './Gummie/Gummie';
import './css.css';

const GenreGummies  = (props) => {
  return (
    <div className = 'gummie-container'>
      {
        //We create a gummie component for every genre the movie has
        props.genres.map((item, index) => (
          <Gummie key = {index} item = {item}/>
        ))
      }
    </div>
  );
};
export default GenreGummies;
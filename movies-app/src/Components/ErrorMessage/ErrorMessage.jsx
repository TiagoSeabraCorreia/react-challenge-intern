import React from 'react';
import './css.css';

const Error = (props) => {
    return(
        <div className='error-container'>
            <div className='error'>
            {props.errorMessage}
        </div>
        </div>
        
    );
};

export default Error;
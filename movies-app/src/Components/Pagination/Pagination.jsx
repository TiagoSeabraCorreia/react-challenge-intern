import React from 'react';
import './css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {

    //Handler to go to the next page
    const handleNextPage = (event) => {
        props.handlePageChange(+1)
    }


    //Handler to go the previous page
    const handlePreviousPage = (event) => {
        props.handlePageChange(-1)
    }

    
    return (
        <div className="pagination-container">
            <div className='pagination'>
                <div className='left-arrow' onClick={handlePreviousPage} >
                    <FontAwesomeIcon className='start-icon' icon={faLeftLong}/>
                </div>
                <div>
                    {props.currentPage} / {props.totalPages  }
                </div>
                <div className='right-arrow' onClick={handleNextPage}>
                    <FontAwesomeIcon className='start-icon' icon={faRightLong}/>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
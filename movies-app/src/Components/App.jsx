import React from 'react';
import { BrowserRouter as Switch ,Routes,Router, Route, BrowserRouter} from  'react-router-dom';
import MainContainer from './MainContainer/MainContainer';
import MovieInfo from './MovieInfo/MovieInfo';
import { useState } from 'react';
const App  = () => {
  //state for the number of the current page
  const [currentPage, setCurrentPage] = useState(1);
  //state for the total of pages available for the pagination
  const [totalPages, setTotalPages] = useState(0);
  /**
   * Function to handle the page change, it is necessary to make sure the
   * page number exists
   * 
   * @param {number} pageIncrement 
   */
  const handlePageChange = (increment) =>{
    if((currentPage + increment) > 0 && (currentPage + increment) <= totalPages)
      setCurrentPage(currentPage + increment);
  }

  const handleTotalPagesChange = (total) => {
    setTotalPages(total);
  }

  //state for the search string
  const [search , setSearch] = useState("");

  //function to handle the string change
  const handleSearchChange = (str) => {
    setSearch(str);
  }


  return (
    <div >
        {/* Browser router so we can navigate from route to route */}
        <BrowserRouter>
            {/* Routes definition and their components */}
            <Routes>
                <Route path="/" element={
                <MainContainer 
                search = {search}
                handleSearchChange = {handleSearchChange}
                handlePageChange={handlePageChange} 
                currentPage = {currentPage}
                totalPages = {totalPages}
                handlePageChanges = {handleTotalPagesChange}
                />} />
                <Route path="/movieInfo/:movieId" Component={MovieInfo} />   
            </Routes>
        </BrowserRouter>
    </div>
  );
};
export default App;
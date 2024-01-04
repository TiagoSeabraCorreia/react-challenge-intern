import React from 'react';
import { BrowserRouter as Switch ,Routes,Router, Route, BrowserRouter} from  'react-router-dom';
import MainContainer from './MainContainer/MainContainer';
import MovieInfo from './MovieInfo/MovieInfo';

const App  = () => {
  return (
    <div >
        {/* Browser router so we can navigate from route to route */}
        <BrowserRouter>
            {/* Routes definition and their components */}
            <Routes>
                <Route path="/" exact Component={MainContainer} />
                <Route path="/movieInfo/:movieId" Component={MovieInfo} />   
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
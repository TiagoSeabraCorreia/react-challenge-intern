import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY4NWViY2Q2YTRiYTIwOGE3NTVjN2YzNTE3ZDFlZSIsInN1YiI6IjY1OTRkNDJkMzI2ZWMxMTYxZTA2YmM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uBfPY39ATdo4__m7qlfLHvlW9G9RFP963rjjxxeUysc'
  }
};

export const getData = () =>{
    axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
    return error;
  });
}
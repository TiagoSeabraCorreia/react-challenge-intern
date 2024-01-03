import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  headers: {
    accept: 'application/json',
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
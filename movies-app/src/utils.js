export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY4NWViY2Q2YTRiYTIwOGE3NTVjN2YzNTE3ZDFlZSIsInN1YiI6IjY1OTRkNDJkMzI2ZWMxMTYxZTA2YmM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uBfPY39ATdo4__m7qlfLHvlW9G9RFP963rjjxxeUysc'
  }
};



//Classes of our apps

//Movie class without the extra information
export class Movie{
  /**
   * 
   * @param {string} title 
   * @param {string} imgUrl 
   * @param {string} launchDate 
   * @param {Number} id
   */

  constructor (title, imgUrl, launchDate, id){
    this.title = title;
    this.imgUrl = "https://image.tmdb.org/t/p/w500/" + imgUrl;
    this.launchDate = launchDate;
    this.id = id;
  }
}

//Movie class with the extra information
export class MovieWithInfo extends Movie{
  constructor(title, imgUrl, launchDate, id, genres, rating, overview){
    super(title , imgUrl, launchDate, id) 
    this.overview = overview;
    this.genres = genres;
    this.rating = rating;
  }
}
const superagent = require('superagent');
require('dotenv').config();

const REACT_APP_MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY;



function handelMovie(req, res) {

  try {
    const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_MOVIES_KEY}&query=${req.query.query}&limit=8`;


    superagent.get(moviesUrl).then(movie => {
      const arrOfData = movie.body.results.map(info => new Movies(info));
      res.send(arrOfData);
      console.log(arrOfData);
      // console.log(req.query.query);
      // console.log(movie.body);

    });
    // .catch(console.error);

    // console.log(whetherBitUrl);

  } catch (error) {
    // const arrOfData = Data.data.map(info => new Forcast(info));
    // res.send(arrOfData);
    console.error(`❌🚫 ERROR 🚫❌ : ${error}`);
    res.send(`❌🚫 ERROR 🚫❌ : ${error}`);
  }
};

class Movies {
  constructor(data) {

    this.original_title = data.original_title;
    this.poster_path = data.poster_path;
    this.overview = data.overview;
    this.popularity = data.popularity;
    this.release_date = data.release_date;
    this.vote_count = data.vote_count;




  }

}

module.exports = handelMovie;

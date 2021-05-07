
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
// const Data = require('./weather.json');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 8080;
const WHEATHER_BIT_KEY = process.env.WHEATHER_BIT_KEY;
const REACT_APP_MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY;


app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello people');
});


app.get('/weather', function (req, res) {

  try {
    const whetherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WHEATHER_BIT_KEY}&lat=${req.query.lat}&lon=${req.query.lon}`;

    superagent.get(whetherBitUrl).then(weatherBD => {
      const arrOfData = weatherBD.body.data.map(info => new Forcast(info));
      res.send(arrOfData);

    });
    // .catch(console.error);

    // console.log(whetherBitUrl);

  } catch (error) {
    // const arrOfData = Data.data.map(info => new Forcast(info));
    // res.send(arrOfData);
    console.error(`❌🚫 ERROR 🚫❌ : ${error}`);
    res.send(`❌🚫 ERROR 🚫❌ : ${error}`);
  }
});

class Forcast {
  constructor(data) {
    this.date = data.valid_date;
    this.status = data.weather.description;
  }

}

app.get('/movies', function (req, res) {

  try {
    const moviesUrl = `https://api.themoviedb.org/3/movie/550?api_key=${REACT_APP_MOVIES_KEY}&city=${req.query.query}`;

    superagent.get(moviesUrl).then(movie => {
      const arrOfData = movie.body.data.map(info => new Movies(info));
      res.send(arrOfData);
      console.log(moviesUrl);

    });
    // .catch(console.error);

    // console.log(whetherBitUrl);

  } catch (error) {
    // const arrOfData = Data.data.map(info => new Forcast(info));
    // res.send(arrOfData);
    console.error(`❌🚫 ERROR 🚫❌ : ${error}`);
    res.send(`❌🚫 ERROR 🚫❌ : ${error}`);
  }
});

class Movies {
  constructor(data) {
    this.homepage = data.homepage;
    this.genres = data.genres.name;
    this.original_title = data.original_title;
    this.poster_path = data.poster_path;
    this.overview = data.overview;
    this.popularity = data.popularity;
    this.release_date = data.release_date;
    this.spoken_languages = data.spoken_languages.english_name;


  }

}



app.listen(PORT, () => { console.log(`server started on ${PORT}`); }); //only an note , not nessesary

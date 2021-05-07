
const express = require('express');
const cors = require('cors');
// const superagent = require('superagent');
// const Data = require('./weather.json');
require('dotenv').config();


const handelWeather = require('./server_modules/weather');
const handelMovie = require('./server_modules/movies');

const app = express();

const PORT = process.env.PORT || 8080;
// const WHEATHER_BIT_KEY = process.env.WHEATHER_BIT_KEY;
// const REACT_APP_MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY;


app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello people');
});

app.get('/weather', handelWeather);
// app.get('/weather', function (req, res) {

//   try {
//     const whetherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WHEATHER_BIT_KEY}&lat=${req.query.lat}&lon=${req.query.lon}`;

//     superagent.get(whetherBitUrl).then(weatherBD => {
//       const arrOfData = weatherBD.body.data.map(info => new Forcast(info));
//       res.send(arrOfData);

//     });
//     // .catch(console.error);

//     // console.log(whetherBitUrl);

//   } catch (error) {
//     // const arrOfData = Data.data.map(info => new Forcast(info));
//     // res.send(arrOfData);
//     console.error(`❌🚫 ERROR 🚫❌ : ${error}`);
//     res.send(`❌🚫 ERROR 🚫❌ : ${error}`);
//   }
// });

// class Forcast {
//   constructor(data) {
//     this.date = data.valid_date;
//     this.status = data.weather.description;
//   }

// }


app.get('/movies', handelMovie);

// app.get('/movies', function (req, res) {

//   try {
//     const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_MOVIES_KEY}&query=${req.query.query}&limit=8`;


//     superagent.get(moviesUrl).then(movie => {
//       const arrOfData = movie.body.results.map(info => new Movies(info));
//       res.send(arrOfData);
//       console.log(arrOfData);
//       // console.log(req.query.query);
//       // console.log(movie.body);

//     });
//     // .catch(console.error);

//     // console.log(whetherBitUrl);

//   } catch (error) {
//     // const arrOfData = Data.data.map(info => new Forcast(info));
//     // res.send(arrOfData);
//     console.error(`❌🚫 ERROR 🚫❌ : ${error}`);
//     res.send(`❌🚫 ERROR 🚫❌ : ${error}`);
//   }
// });

// class Movies {
//   constructor(data) {

//     this.original_title = data.original_title;
//     this.poster_path = data.poster_path;
//     this.overview = data.overview;
//     this.popularity = data.popularity;
//     this.release_date = data.release_date;
//     this.vote_count = data.vote_count;




//   }

// }



app.listen(PORT, () => { console.log(`server started on ${PORT}`); }); //only an note , not nessesary

const superagent = require('superagent');
require('dotenv').config();
// const Data = require('./weather.json');


const WHEATHER_BIT_KEY = process.env.WHEATHER_BIT_KEY;


function handelWeather(req, res) {

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
};

class Forcast {
  constructor(data) {
    this.date = data.valid_date;
    this.status = data.weather.description;
  }

}

module.exports = handelWeather;

const express = require('express');
const cors = require('cors');
const Data = require('./weather.json');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello arstrsttrs');
});


app.get('/weather', function (req, res) {
  const arrOfData = Data.data.map(info => new Forcast(info));
  res.send(arrOfData);
});

class Forcast {
  constructor(data) {
    this.date = data.valid_date;
    this.status = data.weather.description;
  }

}

app.get('/error', (req, res) => {
  res.send('Error');
});

app.listen(PORT, () => { console.log(`server started on ${PORT}`); }); //only an note , not nessesary

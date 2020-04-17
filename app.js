const getGeoCordinate = require('./utils/getGeoCordinate');
const getWeather = require('./utils/getWeather');

const location = process.argv[2];

if (location) {
  getGeoCordinate(location, (GeoError, Geodata) => {
    if (GeoError) {
      return console.log(GeoError);
    }

    getWeather(Geodata.lat, Geodata.lon, (WeatherError, Weatherdata) => {
      if (WeatherError) {
        console.log(WeatherError);
      }

      console.log('\n' + Geodata.loc);
      console.log('Temparature: ' + Weatherdata.temp + '°c');
      console.log('Clouds: ' + Weatherdata.clouds + '%');
      console.log('Humidity: ' + Weatherdata.humidity + '%');
    });
  });
} else {
  console.log('Please provide a location');
}

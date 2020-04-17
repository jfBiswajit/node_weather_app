const request = require('request');

const getGeoCordinate = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=9d08dec401bfdb86b4868d2067eac0e2&units=metric`;

  request({
    url: url,
    json: true
  }, (e, res) => {
    if (e) {
      callback('No internet connection availble', undefined);
    } else if (res.body.cod) {
      callback('Location not found!', undefined);
    } else {
      callback(undefined, {
        temp: res.body.current.temp,
        clouds: res.body.current.clouds,
        humidity: res.body.current.humidity
      });
    }
  });
}

module.exports = getGeoCordinate;
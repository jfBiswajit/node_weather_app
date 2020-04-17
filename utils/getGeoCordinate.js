const request = require('request');

const getWeather = (location, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiamZiaXN3YWppdCIsImEiOiJjazkzbGJ0cWcwM2l2M2RwOGlqZ3c1OWp3In0.l84zbfLfkako7yeE9Rspqw`;

  request({
    url: url,
    json: true
  }, (e, res) => {
    if (e) {
      callback('No internet connection availble', undefined);
    } else if (res.body.features.length === 0) {
      callback('Location not found!', undefined);
    } else {
      callback(undefined, {
        lat: res.body.features[0].center[1],
        lon: res.body.features[0].center[0],
        loc: res.body.features[0].place_name,
      });
    }
  });
}

module.exports = getWeather;
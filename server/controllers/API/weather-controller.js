const axios = require('axios')

class WeatherController {
      static getWeather(req, res, next) {
            let apiUrl = "http://api.weatherbit.io/v2.0/current?city=Jakarta,ID&key=4d1309d479334f418aeb1df9218529da" 
            
            axios.get(apiUrl)
                  .then(response => {

                        let weather = {
                              timezone: response.data.data[0].timezone,
                              city_name: response.data.data[0].city_name,
                              description: response.data.data[0].weather.description,
                              icon: response.data.data[0].weather.icon

                        }
                        res.send(weather)
                  //      res.send(response.data.data[0]);
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }
}

module.exports = WeatherController
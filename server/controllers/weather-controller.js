

class Weather {
      static getWeateher(req, res, next) {
            let apiUrl = "http://api.weatherbit.io/v2.0/current" 
            axios.get(apiUrl)
                  .then(response => {
                        console.log(response);
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }
}
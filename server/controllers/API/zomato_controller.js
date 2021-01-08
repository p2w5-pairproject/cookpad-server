const axios = require('axios')

class APIController {
      static getResto(req, res, next) {
            let query = req.query.q
            let restoUrl = `https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${query}&from=0&to=3&calories=591-722&health=alcohol-free`

            axios.get(restoUrl, {
                  headers: {
                        user_key: process.env.ZOMATO_API_KEY
                  }
            }) 
                  .then(response => {
                        let arr = []
                        let resto = response.data.restaurants
                        resto.forEach(element => {
                              let restaurant = {
                                    name: element.restaurant.name,
                                    address: element.restaurant.location.locality_verbose,
                                    menu: element.restaurant.menu_url,
                                    photos: element.restaurant.photos_url
                              }
                              arr.push(restaurant)
                              // res.send(element.name)
                        });
                        // console.log(arr);
                        res.send(arr)
                        // res.send(resto)
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }
}

module.exports = APIController
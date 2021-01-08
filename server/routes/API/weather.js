const router = require('express').Router()
const WeatherController = require('../../controllers/API/weather-controller')

router.get('/weather', WeatherController.getWeather)

module.exports = router
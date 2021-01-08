const router = require('express').Router()
const edaman = require('./API/edaman')
const weather = require('./API/weather')
const zomato = require('./API/zomato')

router.use(edaman)
router.use(weather)
router.use(zomato)

module.exports = router
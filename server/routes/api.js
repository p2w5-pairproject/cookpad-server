const router = require('express').Router()
const edaman = require('./API/edaman')
const weather = require('./API/weather')

router.use(edaman)
router.use(weather)

module.exports = router
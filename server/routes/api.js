const router = require('express').Router()
const edaman = require('./API/edaman')

router.use(edaman)

module.exports = router
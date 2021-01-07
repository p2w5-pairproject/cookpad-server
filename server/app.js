process.env.NODE_ENV === 'development' &&
    require('dotenv').config()

const express = require('express')
const { errorHandlers } = require('./middlewares/errorHandlers')
const router = require('./routes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.use(errorHandlers)
app.listen(port, () => {
    console.log('Listening to',port);
})
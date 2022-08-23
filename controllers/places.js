const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

// More code here in a moment

module.exports = router

require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

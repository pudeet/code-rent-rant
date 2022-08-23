const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

// More code here in a moment

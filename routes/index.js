const express = require('express')
const router = express.Router()
const constans = require('../helpers/constans')

router.get('/', (req, res) => {
    let dayNumber = constans.getCurrentDayNumber()
    res.render('index', { recommendation: constans.getRandomFoodForDay(constans.getDayData(dayNumber))})
})

module.exports = router
const express = require('express')
const router = express.Router()
const Day = require('../models/day')

router.get('/', async (req, res) => {
    let dayNumber = req.query.day*1 || getCurrentDayNumber()

    if(!dayExists(dayNumber)) {
        return res.status(404).json({ message: 'Cannot find day'})
    }

    res.status(200).json({
        food: getRandomFoodForDay(getDayData(dayNumber))
    })
})

function getCurrentDayNumber() {
    return new Date().getDay()
}

function dayExists(dayNumber) {
    return ( dayNumber < 1 || dayNumber > 7) ? false : true
}

function getDayData(dayNumber) {
 return Day.find(day => day.number === dayNumber)
}

function getRandomFoodForDay(dayData) {
    const randomFood = Math.floor(Math.random() * dayData.foods.length)
    return dayData.foods[randomFood]
}

module.exports = router
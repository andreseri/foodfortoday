const express = require('express')
const router = express.Router()
const constans = require('../helpers/constans')

router.get('/', async (req, res) => {
    let dayNumber = req.query.day*1 || constans.getCurrentDayNumber()

    if(!constans.dayExists(dayNumber)) {
        return res.status(404).json({ message: 'Cannot find day' })
    }

    res.status(200).json({
        food: constans.getRandomFoodForDay(constans.getDayData(dayNumber))
    })
})

module.exports = router
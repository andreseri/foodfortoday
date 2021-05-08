const Recommendations = require('./recommendations')


module.exports = {

    getCurrentDayNumber: () => {
        return new Date().getDay()
    },

    dayExists: (dayNumber) => {
        return ( dayNumber < 1 || dayNumber > 7) ? false : true
    },

    getDayData: (dayNumber) => {
    return Recommendations.find(day => day.number === dayNumber)
    },

    getRandomFoodForDay: (dayData) => {
        const randomFood = Math.floor(Math.random() * dayData.foods.length)
        return dayData.foods[randomFood]
    }

}

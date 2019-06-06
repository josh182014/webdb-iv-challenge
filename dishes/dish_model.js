const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development)

module.exports = {
    getDishes,
    addDish,
    
}

function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
}
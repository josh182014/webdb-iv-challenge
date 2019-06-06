const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development)

module.exports = {
    getDishes,
    addDish,
    getDish,
    
}

function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
}

function getDish(id) {
    return db('dishes')
    .where({id})
    .first()
}
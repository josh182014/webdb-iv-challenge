const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development)

module.exports = {
    getRecipes,
    addRecipe,

}

function getRecipes() {
    return db('recipes')
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
}
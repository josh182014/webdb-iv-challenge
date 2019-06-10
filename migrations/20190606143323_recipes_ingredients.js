
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', function (recipes_ingredients) { //creating a table with an id field, name and cohort id
        recipes_ingredients.increments() //increment creates a primary key called id that auto-increments
        recipes_ingredients
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        recipes_ingredients
            .integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_ingredients');
};

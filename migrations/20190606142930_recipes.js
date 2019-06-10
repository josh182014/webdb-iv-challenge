
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function (recipes) { //creating a table with an id field, name and cohort id
        recipes.increments() //increment creates a primary key called id that auto-increments
        recipes
            .string('name', 128)
            .notNullable() //creates a name column as a string with 128 characters that is unique
        recipes
            .string('instructions', 128)
            .notNullable()
        recipes
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};

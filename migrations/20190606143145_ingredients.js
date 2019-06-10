
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function (ingredients) { //creating a table with an id field, name and cohort id
        ingredients.increments() //increment creates a primary key called id that auto-increments
        ingredients
            .string('name', 128)
            .notNullable() //creates a name column as a string with 128 characters that is unique
        ingredients
            .float('quantity')
            .notNullable() 
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
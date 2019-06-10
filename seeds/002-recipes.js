
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Best Pizza Ever', dish_id: 2, instructions: 'Put it in the oven.'},
        {name: 'An okay pizza', dish_id: 2, instructions: 'Put it directly on oven rack at 450 degrees.'},
        {name: 'Awesome Tacos', dish_id: 1, instructions: 'Put the stuff in a tortilla.'},
        {name: 'Fresh Salmon!', dish_id: 3, instructions: 'Cook until safe to eat.'}
      ]);
    });
};

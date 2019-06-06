
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'pizza', quantity: 7},
        {name: 'pound of beef', quantity: 2},
        {name: 'chicken breast', quantity: 1},
        {name: 'salmon', quantity: 1},
        {name: 'head of lettuce', quantity: 2}
      ]);
    });
};

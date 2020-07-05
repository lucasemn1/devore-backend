
exports.seed = function(knex) {
  return knex('schools').insert([
      {
        id: 1,
        name: 'Tica Tocota'
      },
    ]);
};

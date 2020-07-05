
exports.seed = function(knex) {
  return knex('classrooms').insert([
      {
        id: 1,
        name: '1 ano A'
      },
      {
        id: 2,
        name: '2 ano A'
      },
      {
        id: 3,
        name: '3 ano A'
      },
    ]);
};

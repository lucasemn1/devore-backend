
exports.seed = function(knex) {
  return knex('classrooms').insert([
      {
        id: 1,
        name: '1 ano A',
        schoolId: 1,
      },
      {
        id: 2,
        name: '2 ano A',
        schoolId: 1,
      },
      {
        id: 3,
        name: '3 ano A',
        schoolId: 1,
      },
    ]);
};

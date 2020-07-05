
exports.seed = async function(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Devi Devoradora de Conhecimento', 
      points: 549,
      classroomId: 1,
    },
    {
      id: 2,
      name: 'Devi Devoradora de Livros', 
      points: 36,
      classroomId: 1,
    },

    {
      id: 3,
      name: 'Tica Miadora', 
      points: 549,
      classroomId: 2,
    },
    {
      id: 4,
      name: 'Tica Miau Miau', 
      points: 36,
      classroomId: 2,
    },

    {
      id: 5,
      name: 'Gueth Miauzinha', 
      points: 10,
      classroomId: 3,
    },
    {
      id: 6,
      name: 'Gueth Miou', 
      points: 369,
      classroomId: 3,
    },
  ]);

  await knex('genersUsers').insert([
    {
      userId: 1,
      generId: 8
    },
    {
      userId: 1,
      generId: 2
    },
    {
      userId: 2,
      generId: 8
    },
    {
      userId: 3,
      generId: 8
    },
    {
      userId: 4,
      generId: 8
    },
    {
      userId: 5,
      generId: 8
    }
  ]);
};

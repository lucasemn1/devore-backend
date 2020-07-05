
exports.seed = async function(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Devi Devoradora de Conhecimento', 
      accessId: '0123654',
      points: 549,
      classroomId: 1,
    },
    {
      id: 2,
      name: 'Devi Devoradora de Livros', 
      accessId: '956860',
      points: 36,
      classroomId: 1,
    },

    {
      id: 3,
      name: 'Tica Miadora',
      accessId: '965478', 
      points: 549,
      classroomId: 2,
    },
    {
      id: 4,
      name: 'Tica Miau Miau', 
      accessId: '9875211', 
      points: 36,
      classroomId: 2,
    },

    {
      id: 5,
      name: 'Gueth Miauzinha', 
      accessId: '965479', 
      points: 10,
      classroomId: 3,
    },
    {
      id: 6,
      name: 'Gueth Miou', 
      accessId: '965410', 
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


exports.seed = async function(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Devi Devoradora de Conhecimento', 
      accessId: '0123654',
      points: 9874,
      classroomId: 1,
    },
    {
      id: 2,
      name: 'Devi Devoradora de Livros', 
      accessId: '956861',
      points: 3764,
      classroomId: 1,
    },
    {
      id: 3,
      name: 'Betinha A Miau', 
      accessId: '956862',
      points: 1490,
      classroomId: 1,
    },
    {
      id: 4,
      name: 'Mimi O Miau', 
      accessId: '956863',
      points: 7306,
      classroomId: 1,
    },
    {
      id: 5,
      name: 'Lobato o Au au', 
      accessId: '956864',
      points: 5891,
      classroomId: 1,
    },

    {
      id: 6,
      name: 'Tica Miadora',
      accessId: '965478', 
      points: 1934,
      classroomId: 2,
    },
    {
      id: 7,
      name: 'Tica Miau Miau', 
      accessId: '9875211', 
      points: 7364,
      classroomId: 2,
    },

    {
      id: 8,
      name: 'Gueth Miauzinha', 
      accessId: '965479', 
      points: 5825,
      classroomId: 3,
    },
    {
      id: 9,
      name: 'Gueth Miou', 
      accessId: '965410', 
      points: 3794,
      classroomId: 3,
    },
  ]);

  await knex('genersUsers').insert([
    {
      userId: 1,
      generId: 8
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
      generId: 7
    },
    {
      userId: 5,
      generId: 1
    },
    {
      userId: 6,
      generId: 2
    },
    {
      userId: 7,
      generId: 9
    },
    {
      userId: 8,
      generId: 8
    },
    {
      userId: 9,
      generId: 8
    },

  ]);
};

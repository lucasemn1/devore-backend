
exports.seed = function(knex) {
  return knex('books').insert([
    {
      id: 1,
      name: 'Sai fora, coronavírus!',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      imageName: '91HZDsMHxbL.jpg',
      fileName: '4870695114727.pdf',
      audioName: 'superman-redson.mp3',
      avaliation: 0.0,
    },
    {
      id: 2,
      name: 'Cabelo bom é o quê?',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      imageName: 'unnamed.jpg',
      fileName: '7898955730560.pdf',
      audioName: 'superman-redson.mp3',
      avaliation: 0.0,
    },
  ]);
};

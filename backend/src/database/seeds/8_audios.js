
exports.seed = function(knex) {
  return knex('audios').insert([
    {
      id: 1, 
      userId: 1,
      bookId: 1,
      audioName: 'superman-redson.mp3',
      likes: 50
    },
    {
      id: 2, 
      userId: 2,
      bookId: 2,
      audioName: 'batman.mp3',
      likes: 365
    },
  ]);
};

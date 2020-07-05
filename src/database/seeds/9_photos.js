
exports.seed = function(knex) {
  return knex('photos').insert([
    {
      id: 1, 
      userId: 1,
      bookId: 1,
      photoName: '71fugVWIEIL.jpg',
      likes: 74
    },
    {
      id: 2, 
      userId: 2,
      bookId: 2,
      photoName: '91HZDsMHxbL.jpg',
      likes: 95
    },
  ]);
};

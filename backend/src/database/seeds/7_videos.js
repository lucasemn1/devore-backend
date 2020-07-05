
exports.seed = function(knex) {
  return knex('videos').insert([
    {
      id: 1, 
      userId: 1,
      bookId: 1,
      videoName: 'https://www.youtube.com/embed/Z3mG0aVjgGM',
      likes: 50
    },
    {
      id: 2, 
      userId: 2,
      bookId: 2,
      videoName: "https://www.youtube.com/embed/BexHqTwglHM",
      likes: 365
    },
  ]);
};

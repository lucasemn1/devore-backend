
exports.seed = function(knex) {
  return knex('geners').insert([
    {id: 1, name: 'terror'},
    {id: 2, name: 'romance'},
    {id: 3, name: 'conto'},
    {id: 4, name: 'ação'},
    {id: 5, name: 'aventura'},
    {id: 6, name: 'comédia'},
    {id: 7, name: 'drama'},
    {id: 8, name: 'hq e mangás'},
    {id: 9, name: 'espionagem'},
    {id: 10, name: 'fantasia'},
    {id: 11, name: 'ficção científica'},
    {id: 12, name: 'guerra'},
  ]);
};

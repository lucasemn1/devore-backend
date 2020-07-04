
exports.seed = function(knex) {
  return knex('geners').insert([
    {id: 1, name: 'terror'},
    {id: 2, name: 'suspense'},
    {id: 3, name: 'comédia'},
    {id: 4, name: 'nacional'},
    {id: 5, name: 'quadrinhos'}
  ]);
};

exports.up = function (knex) {
  return knex.schema.createTable('genersUsers', (table) => {
    table.increments('id');
    table.integer('generId').unsigned().references('id').inTable('geners').onDelete('SET NULL');
    table.integer('userId').unsigned().references('id').inTable('users').onDelete('SET NULL');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  // return knex.schema.dropTable('genersUsers');
};

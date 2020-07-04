exports.up = function (knex) {
  return knex.schema.createTable('geners', (table) => {
    table.increments('id');
    table.string('name').notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('geners');
};

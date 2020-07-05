
exports.up = function(knex) {
  return knex.schema.createTable('schools', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('schools');
};

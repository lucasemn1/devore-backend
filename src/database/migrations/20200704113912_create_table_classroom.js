
exports.up = function(knex) {
  return knex.schema.createTable('classrooms', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.integer('schoolId').unsigned().references('id').inTable('schools').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('classrooms');
};

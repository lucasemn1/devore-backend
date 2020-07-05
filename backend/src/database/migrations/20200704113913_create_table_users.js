exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('accessId').notNullable().unique();
    table.integer('points').default('0');
    table.integer('classroomId').unsigned().references('id').inTable('classrooms').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

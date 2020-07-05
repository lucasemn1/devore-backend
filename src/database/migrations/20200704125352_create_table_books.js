exports.up = function (knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.string('imageName').notNullable();
    table.string('fileName').notNullable();
    table.decimal('avaliation', 1, 1).default(0.0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('books');
};

exports.up = function (knex) {
  return knex.schema.createTable('booksGeners', (table) => {
    table.increments('id');
    table.integer('bookId').unsigned().references('id').inTable('books').onDelete('SET NULL');
    table.integer('generId').unsigned().references('id').inTable('users').onDelete('SET NULL');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('booksGeners');
};

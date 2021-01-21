
exports.up = function(knex) {
  return knex.schema.createTable('lists', (table) => {
    table.increments('id');
    table.string('name', 50);
    table.integer('order').unsigned().notNullable();
    table.boolean('archived').defaultTo(false);
    table.integer('boardId').unsigned();
    table.foreign('boardId').references('boards.id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lists');
};

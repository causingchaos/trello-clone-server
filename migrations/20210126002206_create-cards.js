
exports.up = function(knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id');
    table.string('title', 50);
    table.string('description', 300);
    table.integer('order').unsigned().notNullable();
    table.json('memberIds');
    table.boolean('archived').defaultTo(false);
    // Foreign keys
    table.integer('listId').unsigned();
    table.foreign('listId').references('lists.id');
    table.integer('boardId').unsigned();
    table.foreign('boardId').references('boards.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards');
};

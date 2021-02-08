
exports.up = function(knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id');
    table.string('text', 300);
    table.datetime('created_at');
    table.integer('userId').unsigned();
    table.foreign('userId').references('users.id');
    table.integer('boardId').unsigned();
    table.foreign('boardId').references('boards.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('activities');
};

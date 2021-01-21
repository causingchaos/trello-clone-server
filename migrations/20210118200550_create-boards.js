
exports.up = function(knex) {
  return knex.schema.createTable('boards', (table) => {
    table.increments('id');
    table.string('name', 50).notNullable();
    table.string('background', 300);
    table.json('memberIds');
    table.integer('ownerId').unsigned();
    table.foreign('ownerId').references('users.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('boards');
};


exports.up = function(knex) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments('id');
    table.datetime('created_at');
    table.datetime('updated_at');
    table.string('first_name', 50);
    table.string('last_name', 50);
    table.string('address',200);
    table.string('title', 25);
    table.string('email', 100);
    table.string('phone', 25);
    table.string('status_cd').defaultTo('active');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts');
};

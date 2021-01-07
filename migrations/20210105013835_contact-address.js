
exports.up = function(knex) {
  return knex.schema.alterTable('contacts', (table) => {
    table.json('address').alter();
  })
};

exports.down = function(knex) {
  knex.schema.alterTable('contacts', function (table) {
    table.string('address',200).alter();
  });
};

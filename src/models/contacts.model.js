/* eslint-disable no-console */

// contacts-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'contacts';

  // Table creation logic removed from feathers scaffolding and is now inside
  // migrations folder, Manually creating the table, and alterations

  //db.schema.hasTable(tableName).then(exists => {
  //  if(!exists) {
  //    db.schema.createTable(tableName, table => {
  //      table.increments('id');
  //      table.string('text');
  //    })
  //      .then(() => console.log(`Created ${tableName} table`))
  //      .catch(e => console.error(`Error creating ${tableName} table`, e));
  //  }
  // });
  

  return db;
};

/* eslint-disable no-console */

// users-model.js - A KnexJS
// 

// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'users';

  console.log('this is running');

  console.log(db.schema);
  
  db.schema.hasTable(tableName).then(exists => {
    console.log('hello world');
    if(!exists) {
      console.log('table does not exist');
      db.schema.createTable(tableName, table => {
        table.increments('id');
      
        table.string('username').unique().notNullable();
        table.string('displayName').notNullable();
        table.string('password').notNullable();
        table.string('imageUrl').notNullable();
            
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
    console.log('done');
  });

  return db;
};

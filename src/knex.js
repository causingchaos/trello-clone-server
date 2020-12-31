const knex = require('knex');
const config = require('../config/knexfile.js');

module.exports = function (app) {
  const environment = process.env.NODE_ENV || 'development';
  console.log('KNEX Server mode: ', environment);

  const environmentConfig = config[environment];
  //console.log('Knex envConfig is: ', environmentConfig);

  const client = environmentConfig.client;
  const connection = environmentConfig.connection;
  console.log(client);
  console.log(connection);

  //const { client, connection } = app.get('postgres'); // old feathers connection stuff
  const db = knex({ client, connection });
  console.log(db.config);

  app.set('knexClient', db);
};

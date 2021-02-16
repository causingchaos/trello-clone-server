module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'justinberry',
      password: 'password',
      database: 'trello_clone_server'
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'justinberry',
      password: 'password',
      database: 'trello_clone_server_test',
      charset: 'utf8'
    },
    seeds: {
      directory: "../seeds"
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: 'ec2-35-171-57-132.compute-1.amazonaws.com',
      port: '5432',
      user: 'emsmzulpvdlavl',
      password: '5e82ee2fef739d7b82613dd4ca43ad899a5ec907a288dcab7ee31328e690d0e1',
      database: 'de3bohplpdicso'
    },
  }
};
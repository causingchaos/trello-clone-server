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
    connection: process.env.DATABASE_URL,
  }
};
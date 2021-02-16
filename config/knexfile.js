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
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_DATABASE,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_ACCESS_KEY,
      ssl: true,
    }
  }
};
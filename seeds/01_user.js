//const { hashPassword, protect} = require('@feathersjs/authentication-local').hooks;
//const password = 'password';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 4')
  //return knex('users').del()
    .then( function () {
      return knex('users').insert([
        {
          id: 1,
          email: 'justin.berry@gmail.com',
          password: 'pineapple',
          username: 'causingchaos',
          date: new Date(),
          is_active: true,
          first_name: 'Justin',
          last_name: 'Berry'
        },
        {
          id: 2,
          email: 'hello@world.com',
          password: 'pineapple',
          username: 'Travel_Guru',
          date: new Date(),
          is_active: true,
          first_name: 'Bob',
          last_name: 'Alice'
        },
        {
          id: 3,
          email: 'hello2@world.com',
          password: 'pineapple2',
          username: 'Travel_Guru2',
          date: new Date(),
          is_active: true,
          first_name: 'Alice',
          last_name: 'Bob'
        }
    ]);
  });
};
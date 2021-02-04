const { Service } = require('feathers-knex');

exports.Activities = class Activities extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'activities'
    });
  }
};

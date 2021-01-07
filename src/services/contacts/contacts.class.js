const { Service } = require('feathers-knex');

exports.Contacts = class Contacts extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'contacts'
    });
  }
};

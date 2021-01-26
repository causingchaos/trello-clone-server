const { Service } = require('feathers-knex');

exports.Cards = class Cards extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'cards'
    });
  }
};

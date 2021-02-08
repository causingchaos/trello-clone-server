const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');
const { 
  isBoardOwner
} = require('../../hooks/authorization.js');

module.exports = {
  before: {
    all: [ authenticate('jwt'), isBoardOwner ],
    find: [],
    get: [],
    create: [
      setField({
        from: 'params.user.id',
        as: 'data.userId'
      })
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

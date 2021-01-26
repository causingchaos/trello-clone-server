const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');
const CustomAuthService = require('./CustomAuthService.js');

module.exports = app => {
  //const authentication = new AuthenticationService(app);
  // Customize the payload in CustomAuthService.js as per:
  // https://docs.feathersjs.com/cookbook/authentication/stateless.html#configuration
  const authentication = new CustomAuthService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  
  app.use('/authentication', authentication);
  app.configure(expressOauth());
};


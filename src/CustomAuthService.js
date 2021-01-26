const { AuthenticationService } = require('@feathersjs/authentication');

class CustomAuthService extends AuthenticationService {

  async getPayload(authResult, params) {
    const payload = await super.getPayload(authResult, params);

    const { user } = authResult;

    payload.test = 'test NEW FIELD';
    user.test = 'test NEW FIELD';

    return payload;
  }
}

module.exports = CustomAuthService;
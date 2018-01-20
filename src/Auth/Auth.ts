import * as auth0 from 'auth0-js';

export default class Auth {
  auth = new auth0.WebAuth({
    domain: 'kessekikun.auth0.com',
    clientID: 'uO9Xrji9cmgq4RAELpj2bKxq4bsb9Etv',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://kessekikun.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth.authorize();
  }
}

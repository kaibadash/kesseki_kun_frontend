import * as auth0 from 'auth0-js';
import * as SuperAgent from 'superagent';
import { Auth0DecodedHash } from 'auth0-js';

export default class Auth {
  auth = new auth0.WebAuth({
    domain: 'kessekikun.auth0.com',
    clientID: 'uO9Xrji9cmgq4RAELpj2bKxq4bsb9Etv',
    redirectUri: 'http://localhost/callback',
    audience: 'https://kessekikun.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth.authorize({
      responseType: 'token id_token',
      scope: 'openid profile'
    });
  }

  handleAuthentication() {
    this.auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.requestCreateServiceUser(authResult);
        this.setSession(authResult);
        history.replaceState(null, '/home');
      } else if (err) {
        history.replaceState(null, '/home');
        console.log(err);
      }
    });
  }

  requestCreateServiceUser(authResult: Auth0DecodedHash) {
    SuperAgent
      .post('/api/v1/users/new')
      .query({ token: authResult.accessToken! })
      .end((err: any, res: SuperAgent.Response) => {
      console.log('requested!');
    });
  }

  setSession(authResult: Auth0DecodedHash) {
    // Set the time that the access token will expire at
    console.log('authResult', authResult);
    let expiresAt = JSON.stringify((authResult.expiresIn! * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken!);
    localStorage.setItem('id_token', authResult.idToken!);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replaceState(null, '/home');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replaceState(null, '/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expire = localStorage.getItem('expires_at');
    let expiresAt = JSON.parse(expire!);
    return new Date().getTime() < expiresAt;
  }
}

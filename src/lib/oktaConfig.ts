export const oktaConfig = {
    clientId: '0oac5qtseeXQODo965d7',
    issuer: 'https://dev-83520982.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,

}
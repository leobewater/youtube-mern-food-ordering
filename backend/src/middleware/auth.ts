const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: 'youtube-mern-food-ordering-backend',
  issuerBaseURL: 'https://dev-ktxltid3663phhz5.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});
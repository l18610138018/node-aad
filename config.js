exports.creds = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    audience: process.env.AUDIENCE,    
    redirectUrl: process.env.REDIRECT_URL,
    // you cannot have users from multiple tenants sign in to your server unless you use the common endpoint
    // example: https://login.microsoftonline.com/common/.well-known/openid-configuration
    identityMetadata: process.env.IDENTITY_METADATA,
    validateIssuer: true, // if you have validation on, you cannot have users from multiple tenants sign in to your server
    passReqToCallback: false,
    responseType: 'id_token', // for login only flows use id_token. For accessing resources use `id_token code
    responseMode: 'query', // For login only flows we should have token passed back to us in a POST
    loggingLevel: 'info', // valid are 'info', 'warn', 'error'. Error always goes to stderr in Unix.
    scope: ['email', 'profile'] // additional scopes you may wish to pass
};
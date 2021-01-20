var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

var db = require("../models");
var keys = require("./keys");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email",
    },
    function (email, password, done) {
      // When a user tries to sign in this code runs

      db.User.findOne({
        email: email,
      }).then(function (dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email.",
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.comparePassword(password)) {
          return done(null, false, {
            message: "Incorrect password.",
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

// //FACEBOOK STRATEGY
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    db.User.findOne({
      email: email,
    }).then(function (dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email.",
        });
  }
});
}
)
);


// //GOOGLE STRATEGY
passport.use(new GoogleStrategy({
  consumerKey: keys.GOOGLE.clientID,
  consumerSecret: keys.GOOGLE.clientSecret,
  callbackURL: "/auth/google/callback"
},
function (token, tokenSecret, profile, done) {
  db.User.findOne({
    email: email,
  }).then(function (dbUser) {
    // If there's no user with the given email
    if (!dbUser) {
      return done(null, false, {
        message: "Incorrect email.",
      });
}
});
}
)
);


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

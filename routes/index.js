var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated() ) res.redirect('/trips')
  res.render('index', {title: 'psilo'});
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/trips',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;

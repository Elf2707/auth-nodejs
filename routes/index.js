var express = require('express');
var basicAuth = require('./../auth/basic/auth');
var router = express.Router();

/* GET home page. */
router.get('/', basicAuth.isAuthenticated, function(req, res, next) {
  res.send('<html><body>Welcome ' + req.user.displayName+ ' Hello world!!!' + '</body></html>')
  res.render('index', { title: 'Express' });
});

module.exports = router;

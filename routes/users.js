var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('templateUsers', {title: 'Users View', message: 'This is the main page of users view' });
});
router.get('/usersList', function(req, res, next) {
  res.render('templateUsers',{title: 'Users View',message: 'This is the list of users section!'});
});
router.get('/permissions', function(req, res, next) {
  res.render('templateUsers', {title: 'Users View', message: 'This is the permissions section!'});
});

module.exports = router;

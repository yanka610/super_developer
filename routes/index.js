var express = require('express');
var router = express.Router();
var controller = require('../server/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register.ejs');
});
router.get('/test', controller.test);
router.post('/user', controller.addUser);
router.get('/user', controller.getUser);



module.exports = router;

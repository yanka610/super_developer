var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register.ejs');
});
router.get('/test', controller.test);
router.get('/usr', controller.addUser);



module.exports = router;

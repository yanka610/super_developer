var express = require('express');
var router = express.Router();
var controller = require('../server/userController');
var ctrl=require('../server/clientController');
var carController=require('../server/carController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register.ejs');
});
router.get('/main', function(req, res, next) {
  res.render('layout.ejs');
});

router.post('/login', controller.logIn);
router.post('/user', controller.addUser);
router.get('/user', controller.getUser);
router.post('/client',ctrl.addClient);
router.post('/car',carController.addCar);



module.exports = router;

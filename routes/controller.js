var User = require ('../models/user.js');

exports.addUser = function(req, res) {
    var user = new User({name: "Yanka"});
    user.save(function (err) {
        console.log(err);
        if (!err) {
            res.send({msg: 'true'});
        } else {
            console.log(err);
        res.send({msg: 'false'}); 
        }
    });
}

exports.test = function(req, res) {
    console.log('ddddddddd');
}
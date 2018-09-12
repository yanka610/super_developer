var User = require ('../models/user.js');

exports.addUser = function(req, res) {
    
    var user = new User({name: "Yanka"});
    user.save(function (err) {
        if (!err) {
            res.send({msg: 'true'});
        } else {
        res.send({msg: 'false'}); 
        }
    });
}
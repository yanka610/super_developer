var User = require ('../models/user.js');

exports.addUser = function(req, res) {
   if (req.body) {
        var user = new User({
            name: req.body.name,
            surname: req.body.surname,
            email:req.body.email,
            login: req.body.login,
            password: req.body.password
        });
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
}

exports.logIn = function(req, res) {
    if (req.body) {
        let data = req.body;
        if (data.login) {
            User.findOne({email: data.login}).exec(function(err, result) {
                if (!err) {
                    if (result && result.email === data.login && result.password === data.password) {
                        
                        res.send({msg: true})
                       
                    } else {
                        res.send({msg: false})
                    } 
                } else {
                    res.send({msg: false})
                }
            })
        } else {
            res.send({msg: false})
        }
    } else {
        res.send({msg: false})
    }
}

exports.getUser = function(req, res) {
    
    User.find({name: "Yanka"}).exec( function(err, result){
        console.log(result);
        res.send(result);
    })
}

exports.test = function(req, res) {
    console.log('ddddddddd');
}
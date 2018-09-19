var User = require ('../models/user.js');

exports.addUser = function(req, res) {
   if (req.body) {
        var user = new User({
            name: req.body.name,
            surname: req.body.surname,
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

exports.getUser = function(req, res) {

    User.find({name: "Yanka"}).exec( function(err, result){
        console.log(result);
        res.send(result);
    })

    // users.findOne({ 'name': "Yanka"}, function (doc){
    //     res.send(doc);
    //   });

    // users.findOne().select('name').exec(function (err, p) {
    //    res.send(p);
    //   });


   
   //  user.findOne({name: 'Yanka'}, function(err,obj) { res.send(obj); });
//console.log("dfgd");




}

exports.test = function(req, res) {
    console.log('ddddddddd');
}
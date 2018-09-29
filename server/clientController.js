var Client = require ('../models/client.js');


exports.addClient = function(req, res) {
   if (req.body) {
        var client = new Client({         
            name: req.body.name,
            surname: req.body.surname,
            phone:req.body.phone
           
        });
        client.save(function (err) {
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
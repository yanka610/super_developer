var AutoPart = require ('../models/autopart.js');

exports.addAutoPart = function(req, res) {
   if (req.body) {
        var part = new AutoPart({
            name: req.body.name,
            number: req.body.number,
            price:req.body.price
           
        });
        part.save(function (err) {
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
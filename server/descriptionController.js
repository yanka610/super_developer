var Description = require ('../models/description.js');

exports.addDescription = function(req, res) {
   if (req.body) {
        var description = new Description({
            name: req.body.name,          
            price:req.body.price,
            suma: req.body.suma,
            partId:req.body.partId
           
        });
        description.save(function (err) {
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
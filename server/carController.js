var Car = require ('../models/car.js');

exports.addCar = function(req, res) {
   if (req.body) {
        var car = new Car({         
            car_number: req.body.car_number,
            body_number: req.body.body_number,
            car_make:req.body.car_make,
            car_model:req.body.car_model,
            car_mileage:req.body.car_mileage

        });
        car.save(function (err) {
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
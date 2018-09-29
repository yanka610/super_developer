var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CarSchema = new Schema ({
    id: {type: Schema.ObjectId},
    car_number: {type: String},
    body_number: {type: String},
    car_make: {type: String},
    car_model: {type: String},
    car_mileage: {type: String}
    
})

const Car = mongoose.model('Car', CarSchema);
module.exports = Car; 
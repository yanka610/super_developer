var mongoose = require('mongoose');
var Client = require ('../models/client.js');
var Description = require ('../models/description.js');
var User = require ('../models/user.js');
var Car = require ('../models/car.js');
const Schema = mongoose.Schema;

var ServiceSchema = new Schema ({
    id: {type: Schema.ObjectId},
    clientId: {type: Schema.ObjectId, ref:'Client'},
    carId: {type: Schema.ObjectId, ref:'Car'},
    descriptionId: {type: Schema.ObjectId, ref:'Description'},
    userId:{type:Schema.ObjectId,ref:'User'},
    date :{type:Date}
    
})

const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service; 
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Part = require ('../models/autopart.js');

var DescriptionSchema = new Schema ({
    id: {type: Schema.ObjectId},
    name:{type:String},
    price: {type: Int32Array},
    suma: {type: Int32Array},
    partId: {type: Schema.ObjectId, ref:'Part'}
    
})

const Description = mongoose.model('Description', DescriptionSchema);
module.exports = Description; 
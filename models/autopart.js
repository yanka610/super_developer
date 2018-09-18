var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PartSchema = new Schema ({
    id: {type: Schema.ObjectId},
    name:{type:String},
    number: {type: String},
    price: {type: Int32Array}
    
})

const Part = mongoose.model('Part', PartSchema);
module.exports = Part; 
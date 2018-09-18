var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ClientSchema = new Schema ({
    id: {type: Schema.ObjectId},
    name: {type: String},
    surname: {type: String},
    phone: {type: String},
    
})

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client; 
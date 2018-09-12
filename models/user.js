var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema ({
    id: {type: Schema.ObjectId},
    name: {type: String},
    surname: {type: String},
    login: {type: String},
    password: {type: String}
})
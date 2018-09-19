var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema ({
    id: {type: Schema.ObjectId},
    name: {type: String},
    email:  {type: String},
    surname: {type: String},
    login: {type: String},
    password: {type: String}
})

const User = mongoose.model('User', UserSchema);
module.exports = User; 
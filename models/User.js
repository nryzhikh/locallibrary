const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 100, RegExp: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/ },
});

module.exports = mongoose.model('User', UserSchema);

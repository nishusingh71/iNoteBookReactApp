const mongoose = require('mongoose');

const UserScehma = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        reuquired: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserScehma);
module.exports = User;
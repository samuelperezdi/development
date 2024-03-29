"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email:String,
    nick:String,
    role:String,
    image:String,
    birthdate:String,
    password:String
})

module.exports = mongoose.model('User', UserSchema);

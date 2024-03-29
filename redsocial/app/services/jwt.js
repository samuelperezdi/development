"use strict"

var jwt = require("jwt-simple")
var moment = require("moment")
var secret = "semesterisover123"

function createToken(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add("30", "days").unix()
    }

    return jwt.encode(payload, secret);
}

module.exports = {
    createToken
}

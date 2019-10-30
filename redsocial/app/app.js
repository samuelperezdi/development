"use strict"

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//load routes

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Samuel, porfa quiérete."
    })
})

app.get("/pruebas", (req, res) => {
    res.status(200).send({
        message: "Samuel, tú puedes."
    })
})

app.post("/", (req, res) => {
    console.log(req.val);
    res.status(200).send({
        message: "Samuel, tú puedes."
    })
})
// midelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// CORS

//  routes

// export
module.exports = app;
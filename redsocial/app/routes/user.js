'use strict'

var express = require("express");
var UserController;
UserController = require("../controllers/user");

var api = express.Router();

// Definir las rutas

api.get("/home", UserController.home);
api.get("/pruebas", UserController.pruebas);

module.exports = api;

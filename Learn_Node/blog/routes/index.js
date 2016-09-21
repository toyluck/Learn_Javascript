var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function ( app ) {
    app.get("/", function ( req, res ) {
        res.render('index', {title: "Express"});
    });
    app.get("/home", function ( req, res ) {
        res.render("home", {title: "主页"});
    });
    app.get("/login", function ( req, res ) {
        res.render('login', {title: "登录"});
    });
    app.get("/register", function ( req, res ) {
        res.render("register", {title: "注册"});
    });


};


const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

module.exports = function (app) {
    app.use(express.static(path.join(__dirname, 'public/build')));
    //bodyParser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
}
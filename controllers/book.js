const model = require('../models/book').model
const BasicController = require('./basic').basic

//controller
function BookController(_model) {
    //inheritance
    BasicController.call(this, _model)
    //private field
    const model = _model
    //custom method

}

//export
exports.controller = new BookController(model)
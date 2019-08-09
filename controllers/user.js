const model = require('../models/user').model
const BasicController = require('./basic').basic

//controller
function UserController(_model)  {
    //inheritance
    BasicController.call(this, _model)
    //private field
    const model = _model
    //custom method
    this.findByPhoneNumber = async (request, response) => {
        //params
        let data = request.body
        //call method
        let result = await model.findByPhoneNumber(data.phone)
        if (!result.error) {
            return response.send(result)
        } else return response.status(500).send(result)
    }
}

//export
exports.controller = new UserController(model)
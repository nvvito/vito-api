const model = require('../models/user').model
//const io = require('../index')

class UserController {
    async getAll(request, response) {
        let result = await model.getAll()
        if (!result.error) {
            return response.send(result)
        } else return response.status(500).send(result)
    }
    async getOneById(request, response) {
        //params
        let id = request.params.id
        //call method
        let result = await model.getOneById(id)
        if (!result.error) {
            return response.send(result)
        } else return response.status(500).send(result)
    }
    async createOne(request, response) {
        //params
        let data = request.body
        //call method
        let result = await model.createOne(data)
        if (!result.error) {
            return response.send({
                insertedId: result.insertedId.toString(),
                insertedCount: result.insertedCount,
                ops: result.ops
            })
        } else return response.status(500).send(result)
    }
    async updateOneById(request, response) {
        //params
        let id = request.params.id
        let data = request.body
        //call method
        let result = await model.updateOneById(id, data)
        if (!result.error) {
            return response.send(result)
        } else return response.status(500).send(result)
    }
    async deleteOneById(request, response) {
        //params
        let id = request.params.id
        //call method
        let result = await model.deleteOneById(id)
        if (!result.error) {
            return response.send(result)
        } else return response.status(500).send(result)
    }
    async findByPhoneNumber(request, response) {
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
exports.method = new UserController()
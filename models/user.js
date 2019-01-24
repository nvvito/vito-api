const BasicModel = require('./basic').basic
const db = require('../db').DB

class BookModel extends BasicModel {
    //custom method
    async findByPhoneNumber(phone) {
        try {
            let result = await this.db.getCollection(this.collection).find({ phones: phone }).toArray()
            return result
        } catch (err) {
            return {
                error: true,
                error_message: err,
            }
        }
    }
}
exports.model = new BookModel(db, 'user', {
    name: 'john doe',
    age: 18,
    phones: [],
})
const BasicModel = require('./basic').basic
const db = require('../db').DB

function BookModel(_db, _collection, _schema) {
    //inheritance
    BasicModel.call(this, _db, _collection, _schema)
    //private field
    const db = _db
    const schema = _schema
    const collection = _collection
    //custom method
    this.findByPhoneNumber = async (phone) => {
        try {
            let result = await db.getCollection(collection).find({ phones: phone }).toArray()
            return result
        } catch (err) {
            return {
                error: true,
                error_message: err,
            }
        }
    }
}
//export
exports.model = new BookModel(db, 'user', {
    name: 'john doe',
    age: 18,
    phones: [],
})
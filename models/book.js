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

}
//export
exports.model = new BookModel(db, 'book', {
    name: '',
    keywords: []
})
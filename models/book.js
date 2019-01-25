const BasicModel = require('./basic').basic
const db = require('../db').DB

class BookModel extends BasicModel {
    //custom method
}
exports.model = new BookModel(db, 'book', {
    name: '',
    keywords: []
})
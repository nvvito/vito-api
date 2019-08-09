const MongoClient = require('mongodb').MongoClient
//DB
function DB(_db_name = 'api') {
    let db_name = _db_name
    let db = null

    this.connect = (url, cb) => {
        if (db) {
            return cb()
        }
        MongoClient.connect(url, { useNewUrlParser: true }, (err, _db) => {
            if (err) return cb(err)
            db = _db
            cb()
        })
    }
    this.getDB = () => {
        return db.db(db_name)
    }
    this.getCollection = (name) => {
        return this.getDB().collection(name)
    }
}
//export
exports.dbClass = DB
exports.DB = new DB()
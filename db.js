const MongoClient = require('mongodb').MongoClient
//DB
class DB {
    constructor(db_name = 'api') {
        this.db_name = db_name
        this.db = null
    }
    connect(url, cb) {
        if (this.db) {
            return cb()
        }
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err) return cb(err)
            this.db = db
            cb()
        })
    }
    getDB() {
        return this.db.db(this.db_name)
    }
    getCollection(name) {
        return this.getDB().collection(name)
    }
}
//export
exports.dbClass = DB
exports.DB = new DB()
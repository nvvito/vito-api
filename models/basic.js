const ObjectID = require('mongodb').ObjectID

class BasicModel {
    constructor(db, collection, schema) {
        this.db = db
        this.schema = schema
        this.collection = collection
    }
    createEmpty() {
        return { ...this.schema }
    }
    updateData(date, newDate) {
        let _date = {}
        Object.keys(date).map(key => _date[key] = newDate[key] !== undefined ? newDate[key] : date[key])
        return _date
    }
    createDocument(date) {
        return this.updateData(this.createEmpty(), date)
    }
    async getAll() {
        try {
            let result = await this.db.getCollection(this.collection).find({}).toArray()
            return result
        } catch (err) {
            return {
                error: true,
                error_message: err,
            }
        }
    }
    async getOneById(id) {
        if (ObjectID.isValid(id)) {
            try {
                let result = await this.db.getCollection(this.collection).findOne({ _id: ObjectID(id) })
                return result
            } catch (err) {
                return {
                    error: true,
                    error_message: 'not found ID'
                }
            }
        } else {
            return {
                error: true,
                error_message: 'Invalid ID'
            }
        }
    }
    async createOne(data) {
        try {
            let result = await this.db.getCollection(this.collection).insertOne(this.createDocument(data))
            return result
        } catch (err) {
            return {
                error: true,
                error_message: err
            }
        }
    }
    async updateOneById(id, data) {
        let validDate = {}
        let empty = this.createEmpty()
        Object.keys(data).map(key => {
            if (Object.keys(empty).indexOf(key) !== -1) validDate[key] = data[key]
        })
        try {
            let result = await this.db.getCollection(this.collection).findOneAndUpdate({ _id: ObjectID(id) }, { $set: validDate }, { returnOriginal: false })
            return result
        } catch (err) {
            return {
                error: true,
                error_message: err
            }
        }
    }
    async deleteOneById(id) {
        if (ObjectID.isValid(id)) {
            try {
                let result = await this.db.getCollection(this.collection).findOneAndDelete({ _id: ObjectID(id) })
                return result
            } catch (err) {
                return {
                    error: true,
                    error_message: 'not found ID'
                }
            }
        } else {
            return {
                error: true,
                error_message: 'Invalid ID'
            }
        }
    }
}
exports.basic = BasicModel
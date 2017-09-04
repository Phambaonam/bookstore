module.exports.getData = function () {
    const db = require('./index')
    class GetData {
        constructor (db) {
            this.db = db
        }

        home () {
            const all_data = 'SELECT * FROM book_store'
            return this.db.task('data',function * (t) {
                return yield t.any(all_data)
            })     
        }
    }

    const result = new GetData(db)
    result.home()
}
module.exports.home = function (app) {
    const books = require('../data').books
    app.get('/', (req, res) => {
        // res.json(books)
        res.render('index', {
            data: books
        })
    })
}
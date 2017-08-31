module.exports.detail_book = function (app) {
    const books = require('../data').books
    app.get('/:book', (req, res) => {
        for(let book in books) {
            if(req.params.book === books[book].name_book) {
                console.log(req.params.book)
                // res.json(books[book])
                res.render('detail_book', {
                    data: [books[book]]
                })
            }
        }       
    })
}
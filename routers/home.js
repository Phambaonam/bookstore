module.exports.home = function (app) {
    const home = require('../models/getData')
    app.get('/', (req, res) => {
        const file_render = 'index'
        home(file_render)
            .then(data => {
                res.render('index', {
                    data: data
                })
            })
    })
}
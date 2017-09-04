module.exports.detail_book = function (app) {

    // Model
    const db = require('../models/index')
    const detail = function (name_field, file_render) {
        const all_data = 'SELECT book.*,ca.name AS name_category, cb.name AS name_category_book ' +
                          'FROM book_store AS book JOIN category_book AS cb ON cb.id = book.id_category_book JOIN category AS ca ON ca.id = cb.id_category;'
        return db.task('data',function * (t) {
            return yield t.any(all_data)
        })
            
    }

    // Controller
    app.get('/:type/:item', (req, res) => {
        const type = req.params.type
        const name_item = req.params.item

        if(type === 'book') {
            let name_field = 'name'
            const file_render = 'detail_book'
            detail(name_field, file_render)
                .then(data => {
                    let result = []
                    for(let item in data) {
                        // Convert name item to compare param item on url
                        const itemConverted = data[item][name_field].replace(/ /g, '-').toLowerCase().replace(',','').replace('#','-sharp')
                        if(name_item === itemConverted) {
                            result.push(data[item])
                        }
                    }
                    res.render(file_render, {
                        data: result
                    })    
                })       
        } else if(type === 'author' ) {
            let name_field = 'author'
            const file_render = 'index'
            detail(name_field, file_render)
                .then(data => {
                    let result = []
                    for(let item in data) {
                        // Convert name item to compare param item on url
                        let itemConverted = data[item][name_field].replace(/ /g, '-').toLowerCase()                      
                        if(name_item === itemConverted) {
                            result.push(data[item])
                        }
                    }  
                    res.render(file_render, {
                        data: result
                    })
                })       
        } else if (type === 'category') {
            let name_field = 'name_category'
            const file_render = 'index'
            detail(name_field, file_render)
                .then(data => {
                    let result = []
                    for(let item in data) {
                        // Convert name item to compare param item on url
                        let itemConverted = data[item][name_field].replace(/ /g, '-').toLowerCase()                      
                        if(name_item === itemConverted) {
                            result.push(data[item])
                        }
                    }  
                    res.render(file_render, {
                        data: result
                    })
                })       
        }
    })
}
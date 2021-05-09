const Article = require('../models/article.model')

exports.home = async (req, res) => {
    let articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('index', {
        data: articles
    })
}
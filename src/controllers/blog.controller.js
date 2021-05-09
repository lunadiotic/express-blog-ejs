const Article = require('../models/article.model')

exports.show = async (req, res) => {
    try {
        let article = await Article.findById(req.params.id)
        res.render('blog/show', {
            data: article
        })
    } catch (e) {
        res.redirect('/home')
    }
}

exports.create = (req, res) => {
    res.render('blog/create', {
        article: new Article()
    })
}

exports.edit = (req, res) => {
    res.render('blog/edit')
}

exports.store = async (req, res) => {
    let article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        date: req.body.date
    })

    try {
        article = await article.save()
        res.redirect(`/blog/${article.id}`)
    } catch (e) {
        res.render('blog/create', {
            article: article
        })
    }
}
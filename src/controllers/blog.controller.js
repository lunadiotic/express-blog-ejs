const Article = require('../models/article.model')

exports.show = async (req, res) => {
    try {
        let article = await Article.findOne({
            slug: req.params.slug
        })
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

exports.edit = async (req, res) => {
    try {
        let article = await Article.findById(req.params.id)
        res.render('blog/edit', {
            article: article
        })
    } catch (e) {
        res.redirect('/home')
    }
}

exports.update = async (req, res) => {
    try {
        let article = await Article.findById(req.params.id)
        await article.update({
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content,
            date: req.body.date
        })
        res.redirect(`/blog/${article.slug}`)
    } catch (e) {
        res.render('blog/edit', {
            article: article
        })
    }
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
        res.redirect(`/blog/${article.slug}`)
    } catch (e) {
        res.render('blog/create', {
            article: article
        })
    }
}

exports.delete = async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/home')
}
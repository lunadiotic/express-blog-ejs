const Article = require('../models/article.model')

exports.show = (req, res) => {
    let data = {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        date: 'on September 24, 2021',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, suscipit, dolorum possimus provident, qui libero maiores delectus architecto soluta consequatur voluptatem illo ratione a laborum odit veritatis magni quam? Nulla!'
    }
    res.render('blog/show', {
        data
    })
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
module.exports = (app) => {
    const blog = require('../controllers/blog.controller')
    const router = require('express').Router()

    router.get('/create', blog.create)
    router.get('/:slug', blog.show)
    router.get('/:slug/edit', blog.edit)

    app.use('/blog', router)
}
module.exports = (app) => {
    const blog = require('../controllers/blog.controller')
    const router = require('express').Router()

    router.get('/create', blog.create)
    router.get('/:slug', blog.show)
    router.get('/:id/edit', blog.edit)
    router.post('/', blog.store)
    router.delete('/:id', blog.delete)

    app.use('/blog', router)
}
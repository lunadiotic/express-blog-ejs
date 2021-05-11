const mongoose = require('mongoose')
const slugify = require('slugify')
const sanitizeHtml = require('sanitize-html')

const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    subtitle: {
        required: false,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
})

articleSchema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }

    if (this.content) {
        this.content = sanitizeHtml(this.content)
    }

    next()
})

module.exports = mongoose.model('Article', articleSchema)
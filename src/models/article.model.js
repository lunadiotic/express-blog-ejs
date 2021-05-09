const mongoose = require('mongoose')

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
})

module.exports = mongoose.model('Article', articleSchema)
const express = require('express')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/idstack_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/', (req, res) => {
    res.send('hello, world')
})

require('./src/routes/home.routes')(app)
require('./src/routes/blog.routes')(app)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`starting development server: http://localhost:${PORT}`)
})
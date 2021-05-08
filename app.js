const express = require('express')
const app = express()
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/', (req, res) => {
    res.send('hello, world')
})

require('./src/routes/home.routes')(app)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`starting development server: http://localhost:${PORT}`)
})
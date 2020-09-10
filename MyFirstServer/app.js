const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + '\\client\\'

const bodyParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser())

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/kebab', (req, res) => res.sendFile(clientDir + 'style.css'))
app.get('/bilder/weeho.jpg', (req, res) => res.sendFile(clientDir + '/bilder/weeho.jpg'))

app.post('/', function(req, res) {
    console.log(req.body)
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
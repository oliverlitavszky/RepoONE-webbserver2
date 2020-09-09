const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/kebab', (req, res) => res.sendFile(clientDir + 'style.css'))
app.get('/bilder/weeho.jpg', (req, res) => res.sendFile(clientDir + '/bilder/weeho.jpg'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
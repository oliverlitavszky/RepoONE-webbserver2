const express = require('express')
const ejs = require('ejs')
const databaseModule = require('./databaseModule')
const app = express()
const port = 3000

const personModule = require('./personModule')

const clientDir = __dirname + "\\client\\"


app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

const names = []

app.get('/', (req, res) => {
  res.render("pages/index.ejs", {nameList: names, name: ""} )
})

app.get('/bajs', (req, res) => {
  res.sendFile(clientDir + "stule.css")
})

app.get('/jesus', (req, res) => {
  res.sendFile(clientDir + "download.jpg")
})

app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)
  let person = personModule.newPerson(req.body.name, req.body.email, req.body.age)
  databaseModule.storeModel(person)
  names.push(req.body.name)
  res.render("pages/index.ejs", {nameList:names, name: req.body.name})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 

require('dotenv').config()
const express = require('express')
const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})
const dbGateway = require('./db-gateway')
const bodyParser = require('body-parser')

const notes = dbGateway(knex, 'notes')
const app = express()

app.use(express.static('server/public'))
app.use(bodyParser.json())

app.get('/notes', (req, res) => {
  notes
    .find()
    .then(notes => res.json(notes))
    .then(() => res.sendStatus(200))
})

app.post('/notes', (req, res) => {
  notes
    .create(req.body)
    .then(() => res.sendStatus(201))
})

app.delete('/notes/:id', (req, res) => {
  notes
    .deleteById(req.params.id)
    .then(() => res.sendStatus(204))
})

app.listen(process.env.PORT, () => console.log('Listening on ' + process.env.PORT))

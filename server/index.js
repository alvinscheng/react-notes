const express = require('express')
const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/react-notes'
})

const app = express()

app.use(express.static('server/public'))

app.get('/notes', (req, res) => {
  knex('notes').then(notes => res.json(notes))
})

app.listen(3000, () => console.log('Listening on 3000!'))

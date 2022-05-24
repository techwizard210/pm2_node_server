const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require("http")

const app = express()
const server = http.Server(app)

app.use(cors())
app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json({ limit: "15360mb", type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'client/index.html')) })

server.listen(5000, () => {console.log(`Started server on => http://localhost:${5000}`)})
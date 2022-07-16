const express = require('express')
const path = require('path')

// const fruitRoutes = require('./routes/list')
const scoreRoutes = require('./routes/score')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1', fruitRoutes)
server.use('/api/v1/list', scoreRoutes)

module.exports = server

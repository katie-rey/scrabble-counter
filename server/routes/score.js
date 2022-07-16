const express = require('express')
const db = require('../db/score')
const router = express.Router()

// GET score
router.get('/', (req, res) => {
  db.getScore()
    .then((score) => {
      console.log(score + 'routes')
      res.json(score)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

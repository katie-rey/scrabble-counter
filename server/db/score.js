const connection = require('./connection')

function getScore(db = connection) {
  return db('score').select()
}
module.exports = {
  getScore,
}

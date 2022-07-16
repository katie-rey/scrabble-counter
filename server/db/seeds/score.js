exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('score')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('score').insert([{ id: 1, scoreOne: 22, scoreTwo: 23 }])
    })
}

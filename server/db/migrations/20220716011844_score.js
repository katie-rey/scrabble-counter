exports.up = function (knex) {
  return knex.schema.createTable('score', (table) => {
    table.increments('id')
    table.int('scoreOne')
    table.int('scoreTwo')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('score')
}

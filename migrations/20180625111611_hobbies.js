exports.up = (knex, Promise) => {
  return knex.schema.createTable('hobbies', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('user_id')
    table.integer('frequency')
    table.string('level')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('hobbies')
}


exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('hobbies').del()
    .then(() => {
      // Inserts seed entries
      return knex('hobbies').insert([
        {id: 1, name: 'tennis', user_id: 99901, frequency: 4, level: 'awesome'}
      ])
    })
}

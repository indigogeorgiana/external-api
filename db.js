const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  getActivities
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).first()
}

function addUser (user, testDb) {
  const db = testDb || connection
  return db('users')
    .insert(user)
}

function updateUser (updatedUser, testDb) {
  const db = testDb || connection
  return db('users')
    .where('id', updatedUser.id)
    .update(updatedUser)
}

function getActivities (testDb) {
  const db = testDb || connection
  return db('hobbies').select()
}
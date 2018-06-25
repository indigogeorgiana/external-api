const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  getActivities,
  getActivity,
  addActivity,
  updateActivity,
  removeActivity
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

function getActivity (id, testDb) {
  const db = testDb || connection
  return db('hobbies')
    .join('users', 'users.id', 'hobbies.user_id')
    .where('hobbies.id', id)
    .select()
}

function addActivity (activity, testDb) {
  const db = testDb || connection
  return db('hobbies')
    .insert(activity)
}

function updateActivity (activity, testDb) {
  const db = testDb || connection
  return db('hobbies')
    .where('id', activity.id)
    .update(activity)
}

function removeActivity (activity, testDb) {
  const db = testDb || connection
  return db('hobbies')
    .where('id', activity.id)
    .delete(activity.id)
}

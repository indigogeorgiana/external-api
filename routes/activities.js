const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getActivities()
    .then(activities => {
      res.json({activities: activities})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getActivity(id)
    .then(activity => {
      res.json({activity: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const activity = (req.body)
  db.addActivity(activity)
    .then(activity => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/', (req, res) => {
  const updatedActivity = (req.body)
  db.updateActivity(updatedActivity)
    .then(activity => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const updatedUser = (req.body)
  db.updateUser(updatedUser)
    .then(user => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
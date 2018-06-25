const request = require('superagent')

request
  .get('http://localhost:3000/users', (err, res) => {
    if (err) throw err
    console.log(res.text)
  })

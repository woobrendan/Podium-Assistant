const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //results
  router.post('/new', (req, res) => {
    const fastLap = req.body;
    console.log('req.body', fastLap)
    const queryString = 
    `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;
    return db
      .query(queryString, [fastLap.driver, fastLap.lapTime])
      .then(result => {
        console.log('result rows:', result.rows[0])
        return result.rows[0].id
      })
      .catch(err => console.log(err.message))
  });
  return router;
}


const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/fastlaps
  router.get('/', (req, res) => {
    const queryString = 
    `SELECT * FROM fastlaps;`;
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
          .json(response.rows)
      })
      .catch(err => console.log(err.message))
  });

  router.post('/', (req, res) => {
    const fastLapInfo = req.body;
    const queryString = 
    `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;
    return db
      .query(queryString, [fastLapInfo.driver, fastLapInfo.lapTime])
      .then(result => {
        console.log('result rows:', result.rows[0])
        return result.rows[0].id
      })
      .catch(err => console.log(err.message))
  });
  return router;
}


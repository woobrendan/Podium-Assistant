const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //results
  router.post('/new', (req, res) => {
    const fastLap = req.body.results.fastLap;
    const result = req.body.results;
    console.log('req.body', req.body)
    const queryString = 
    `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;

    const newResultString = `
    INSERT INTO results (date, event_id, series_id, fastlap_id) VALUES ($1, $2, $3, $4) RETURNING *;`

    // Create new fast lap entry
    return db
      .query(queryString, [fastLap.id, fastLap.laptime])
      .then(result => {
        return result.rows[0].id
      })
      .then(fastId  => {
        return db.query(newResultString, [result.date, result.event, result.series, fastId])
      })
      .then(val => {
        const resultId = val.rows[0].id
        console.log('result Id:', resultId)
      })
      .catch(err => console.log(err.message))
  });
  return router;
}


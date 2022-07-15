const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //results
  router.post('/new', (req, res) => {
    const fastLap = req.body.results.fastLap;
    
    const queryString = 
    `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;

    const newResultString = `
    INSERT INTO results (date, event_id, series_id, fastlap_id) VALUES ($1, $2, $3, $4);`

    // Create new fast lap entry
    return db
      .query(queryString, [fastLap.id, fastLap.laptime])
      .then(result => {
        console.log('result rows:', result.rows[0])
        return result.rows[0].id
      })
      // .then(fastId  => {
      //   return db.query(newResultString, [])
      // })
      .catch(err => console.log(err.message))
  });
  return router;
}


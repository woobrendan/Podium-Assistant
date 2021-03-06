const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //results
  router.post('/new', (req, res) => {
    const fastLap = req.body.results.fastLap;
    const result = req.body.results;
    const result1 = req.body.result1;
    const result2 = req.body.result2;
    const result3 = req.body.result3;

    console.log('req.body', req.body)
    const queryString = 
    `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;

    const newResultString = `
    INSERT INTO results (date, event_id, series_id, fastlap_id) VALUES ($1, $2, $3, $4) RETURNING *;`

    const podiumString = `
    INSERT INTO podiums (class_id, first_place, second_place, third_place, result_id) VALUES  ($1, $2, $3, $4, $5)`

    // Create new fast lap entry
    return db
      .query(queryString, [fastLap.id, fastLap.laptime])
      .then(fast => {
        const fastId = fast.rows[0].id;
        return db.query(newResultString, [result.date, result.event, result.series, fastId])
      })
      //  get result Id from return from previous query, pass to each podium creation
      .then(val => {
        const resultId = val.rows[0].id;
        db.query(podiumString, [result1.class, result1.first_place, result1.second_place, result1.third_place, resultId]);
        db.query(podiumString, [result2.class, result2.first_place, result2.second_place, result2.third_place, resultId]);
        return db.query(podiumString, [result3.class, result3.first_place, result3.second_place, result3.third_place, resultId]);
      })
      .then(response => {
        res.json(response.rows);
        return res.status(200);
      })
      .catch(err => console.log(err.message))
  });
  return router;
}


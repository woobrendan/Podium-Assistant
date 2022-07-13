const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/results
  router.get('/', (req, res) => {
    const queryString = 
    `SELECT results.id AS result_id, results.date AS date, events.name AS event, series.name AS series, class.name AS class, fastlaps.id AS fast_lap, podiums.*
    FROM results
    JOIN events ON events.id = event_id
    JOIN series ON series.id = series_id
    JOIN podiums ON results.id = result_id
    JOIN drivers ON first_place = drivers.id
    JOIN class ON class_id = class.id
    JOIN fastlaps ON fastlap_id = fastlaps.id
    ORDER BY date, podiums.id
    ;`;
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
          .json(response.rows)
      })
      .catch(err => console.log(err.message))
  });

  router.get('/:id', (req, res) => {
    const queryString = `
    SELECT results.id AS result_id, events.name AS event, series.name AS series, podiums.* 
    FROM results
    JOIN events ON events.id = event_id
    JOIN series ON series.id = series_id
    JOIN podiums ON results.id = result_id
    WHERE results.id = $1
    ;
    `;
    return db
      .query(queryString, [req.params.id])
      .then(response => {
        return res.status(200)
          .json(response.rows)
      })
      .catch(err => console.log(err.message))
  });
  return router;
}


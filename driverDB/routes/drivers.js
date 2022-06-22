const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/drivers
  router.get('/', (req, res) => {
    const queryString = `
    SELECT drivers.id as id, drivers.name AS driver, rating, nationality, teams.name AS team, vehicles.car AS vehicle, vehicles.number AS number, vehicles.classification AS classification, series.name AS series 
    FROM drivers
    JOIN teams ON teams.id = team_id
    JOIN vehicles ON vehicles.id = vehicle_id
    JOIN series ON series.id = series_id
    ORDER BY drivers.id;
    `;
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
          .json(response.rows)
      })
      .catch(err => console.log(err.message))
  })
  return router;
}
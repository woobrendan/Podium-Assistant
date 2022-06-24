const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/vehicles
  router.get('/', (req, res) => {
    const queryString = `
    SELECT vehicles.id AS id, vehicles.car AS vehicle, vehicles.number AS number, vehicles.classification AS classification, teams.name AS team, series.name AS series, drivers.name AS driver_name, drivers.rating AS rating, drivers.nationality AS nationality
    FROM vehicles
    JOIN teams ON teams.id = team_id
    JOIN series ON series.id = series_id
    JOIN drivers ON vehicles.id = vehicle_id
    ORDER BY vehicles.id;
    `;
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
    SELECT vehicles.id AS id, vehicles.car AS vehicle, vehicles.number AS number, vehicles.classification AS classification, teams.name AS team, series.name AS series, drivers.name AS driver_name, drivers.rating AS rating, drivers.nationality AS nationality
    FROM vehicles
    JOIN teams ON teams.id = team_id
    JOIN series ON series.id = series_id
    JOIN drivers ON vehicles.id = vehicle_id
    WHERE vehicles.id = $1
    ORDER BY vehicles.id;
    ` 
    return db
      .query(queryString, [req.params.id])
      .then(response => {
        return res.status(200)
          .json(response.rows[0]);
      })
      .catch(err => console.log(err.message));
  })

  return router;
}
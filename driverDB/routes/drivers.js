const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/drivers
  router.get('/', (req, res) => {
    const queryString = `
    SELECT drivers.id AS id, drivers.name AS name, drivers.rating AS rating, drivers.nationality AS nationality, drivers.team_id AS team_id, vehicles.car AS vehicle, drivers.vehicle_id AS vehicle_id
    FROM drivers
    JOIN vehicles ON vehicle_id = vehicles.id;
    `;
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
          .json(response.rows)
      })
      .catch(err => console.log(err.message))
  });

  router.get('/vehicles', (req, res) => {
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
  });

  router.get('/:id', (req, res) => {
    const queryString = `
    SELECT drivers.*, teams.name AS team, vehicles.car AS vehicle  
    FROM drivers
    JOIN teams ON teams.id = team_id 
    JOIN vehicles ON vehicle_id = vehicles.id
    WHERE drivers.id=$1;
    `;
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


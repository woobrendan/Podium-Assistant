const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/teams
  router.get('/', (req, res) => {
    const queryString = `
    SELECT drivers.id as id, drivers.name AS driver, rating, nationality, teams.name AS team, vehicles.* AS vehicle 
    FROM drivers
    JOIN teams ON teams.id = team_id
    JOIN vehicles ON vehicles.id = vehicle_id;
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
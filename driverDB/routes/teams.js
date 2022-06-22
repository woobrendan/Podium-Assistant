const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/teams
  router.get('/', (req, res) => {
    const queryString = `SELECT * FROM teams;`;
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
          .json(response.rows)
      })
      .catch(err => console.log(err.message))
  });
  return router;
}
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //route /api/events
  router.get('/', (req, res) => {
    const queryString = 
    `SELECT * FROM events;`;
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
          .json(response.rows)
      })
      .catch(err => console.log(err.message))
  });

  // api/events/"id"
  router.get('/:id', (req, res) => {
    const queryString = 
    `SELECT * FROM events
    WHERE id=$1;`;
    return db
      .query(queryString,[req.params.id])
      .then(response => {
        return res.status(200)
          .json(response.rows)
        })
        .catch(err => console.log(err.message))
    });
      

  return router;
}


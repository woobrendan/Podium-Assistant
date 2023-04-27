const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const fastLap = req.body;
    const queryString = `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;
    return db
      .query(queryString, [fastLap.driver, fastLap.lapTime])
      .then((result) => {
        return result.rows[0].id;
      })
      .catch((err) => console.log(err.message));
  });
  return router;
};

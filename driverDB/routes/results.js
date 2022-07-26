const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //results
  router.post('/new', (req, res) => {
    const fastLap = req.body.results.fastLap;
    const result = req.body.results;
    const result1 = result.result1;
    const result2 = result.result2;
    const result3 = result.result3;

    console.log('req.body', req.body)

    const queryString = 
    `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;

    const newResultString = `
    INSERT INTO results (date, event_id, series_id, fastlap_id) VALUES ($1, $2, $3, $4) RETURNING *;`

    const podiumString = `
    INSERT INTO podiums (class_id, first_place, second_place, third_place, result_id) VALUES  ($1, $2, $3, $4, $5)`

    const getNumOfResults = () => {
      let num = 1;
      if (result2) num += 1
      if (result3) num += 1
      return num;
    }
    
    const podiumQueryStringBuilder = () => {
      let string = `
        INSERT INTO podiums (class_id, first_place, second_place, third_place, result_id) VALUES  (`;
      const numOfResultInputs = getNumOfResults() * 5;
      for (let i = 1; i <= numOfResultInputs; i++) {
        if (i === numOfResultInputs) {
          string += `$${i}) RETURNING *;`
        } else if (i % 5 === 0){
          string += `$${i}), (`
        } else {
          string += `$${i}, `;
        }
      } 
      return string;
    }

    console.log('podiumquery', podiumQueryStringBuilder())

    // Create new fast lap entry
    return db
      .query(queryString, [fastLap.id, fastLap.laptime])
      .then(fast => {
        const fastId = fast.rows[0].id;
        return db.query(newResultString, [result.date, result.event, result.series, fastId])
      })
      //  get result Id from return from p`revious query, pass to each podium creation
      .then(val => {
        const resultId = val.rows[0].id;
         return db.query(podiumQueryStringBuilder(), [result1.class, result1.first_place, result1.second_place, result1.third_place, resultId]);
        
      })
      .then(response => {
        res.json(response.rows);
        return res.status(200);
      })
      .catch(err => console.log(err.message))
  });
  return router;
}

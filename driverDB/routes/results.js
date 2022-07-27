const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //results
  router.post('/new', (req, res) => {
    const result = req.body.results;
    const fastLap = result.fastLap;
    const result1 = result.result1;
    const result2 = result.result2;
    const result3 = result.result3;
    const result4 = result.result4;

    const queryString = 
    `INSERT INTO fastlaps (driver_id, laptime) VALUES ($1, $2) RETURNING *;`;

    const newResultString = `
    INSERT INTO results (date, event_id, series_id, fastlap_id) VALUES ($1, $2, $3, $4) RETURNING *;`

    const getNumOfResults = () => {
      let num = 1;
      if (result2) num += 1
      if (result3) num += 1
      if (result4) num += 1
      return num;
    }
    
    // create backend of query string, creating n of $n values
    const podiumQueryStringBuilder = () => {
      let string = `
        INSERT INTO podiums (class_id, first_place, second_place, third_place, result_id) VALUES  (`;
      const numOfResultInputs = getNumOfResults() * 5;
      for (let i = 1; i <= numOfResultInputs; i++) {
        if (i === numOfResultInputs) {
          string += `$${i});`
        } else if (i % 5 === 0){
          string += `$${i}), (`
        } else {
          string += `$${i}, `;
        }
      } 
      return string;
    }

    // Create array of values to be passed to query string input into SQL
    const podiumValues = (resultId) => {
      const allResults = [];
      allResults.push(result1.class, result1.first_place, result1.second_place, result1.third_place, resultId)
      if (result2) {
        allResults.push(result2.class, result2.first_place, result2.second_place, result2.third_place, resultId)
      }
      if (result3) {
        allResults.push(result3.class, result3.first_place, result3.second_place, result3.third_place, resultId)
      }
      if (result4) {
        allResults.push(result4.class, result4.first_place, result4.second_place, result4.third_place, resultId)
      }
      return allResults;
    }
    
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
        return db.query(podiumQueryStringBuilder(), podiumValues(resultId));
      })
      .then(response => {
        res.json(response.rows);
        return res.status(200);
      })
      .catch(err => console.log(err.message))
  });
  return router;
}

const express = require('express');
const router = express.Router();
const Results = require('../../models/result_schema')

router.get('/', async (req, res) => {
  try {
    const results =  await Results.find()
    res.json(results)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

router.post('/new', async (req, res) => {

  const newResult = new Results({
    ...req.body.results
  })
  await newResult.save()
  res.send(newResult)
})

module.exports = router;
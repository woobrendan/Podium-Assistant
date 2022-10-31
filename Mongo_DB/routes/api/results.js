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

router.get('/recent', async (req, res) => {
  try {
    const result = await Results.find().sort({_id: -1})
    res.json(result)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

module.exports = router;
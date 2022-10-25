const express = require('express');
const router = express.Router();
const Series = require('../../models/series_schema')

router.get('/', async (req, res) => {
  try {
    const series = await Series.find()
    res.json(series)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router;
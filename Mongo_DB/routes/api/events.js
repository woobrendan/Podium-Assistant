const express = require('express');
const router = express.Router();
const Events = require('../../models/events_schema');

router.get('/', async (req, res) => {
  try {
    const events =  await Events.find()
    res.json(events)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

module.exports = router;
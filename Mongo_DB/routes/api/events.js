const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results =  await Results.find()
    res.json(results)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})
const express = require('express');
const router = express.Router();
// const dbo = require('../../db/conn')
const Entry = require('../../models/entries_schema')

  //route = /api/drivers
router.get('/', aysnc (req, res) => {
  try {
    const entries = await Entry.find()
    res.json(entries)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
  // const dbConnect = dbo.getDb();

  // db
  //   .collection('entries')
  //   .find()
  //   .toArray((err, result) => {
  //     if (err) {
  //       res.status(400).send('Error fetching entries');
  //     } else {
  //       res.json(result)
  //     }
  //   })
})

module.exports = router
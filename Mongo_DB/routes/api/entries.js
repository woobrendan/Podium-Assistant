const express = require('express');
const router = express.Router();
// const dbo = require('../../db/conn')
const Entry = require('../../models/entries_schema')

  //route = /api/drivers
router.get('/', async (req, res) => {
  try {
    const entries =  await Entry.find()
    // console.log('entries', entries)
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

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.post('/post', async (req, res) => {
  const newEntry = new Entry({
    team: req.body.team,
    driver1: {
      name: req.body.driver1.name,
      nationality: req.body.driver1.nationality,
      rating: req.body.driver1.rating
    },
    vehicle: req.body.vehicle,
    classification: req.body.classification,
    number: req.body.number,
    series: req.body.series
  })

  try {
    const entryToSave =  await newEntry.save();
    res.status(200).json(entryToSave)
  } catch(error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
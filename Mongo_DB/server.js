require('dotenv').config()

const PORT = process.env.PORT || 2020;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();
// const MongoClient = require('mongodb').MongoClient

app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoClient.connect(process.env.DATABASE_URL, { useNewURLParser: true })
// .then(client => {
//   console.log('Connected to Database');
//   console.log('client', client.db('sro_db').collection('entries'))
//   db = client.db('sro_db')
// })
// .catch(err => console.error(err))

mongoose.connect(process.env.COMPASS_URL, { useNewURLParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

const apiEntriesRoute = require('./routes/api/entries');

app.use('/api/drivers', apiEntriesRoute);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
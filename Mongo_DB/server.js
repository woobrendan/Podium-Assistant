require('dotenv').config()

const PORT = process.env.PORT || 2020;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

mongoose.connect(process.env.COMPASS_URL, { useNewURLParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

const apiEntriesRoute = require('./routes/api/entries');
const apiResultsRoute = require('./routes/api/results');

app.use('/api/drivers', apiEntriesRoute);
app.use('/api/results', apiResultsRoute);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
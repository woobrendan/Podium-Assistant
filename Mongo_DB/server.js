if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT || 2020;
const express = require('express');
const app = express();

app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

const apiDriverRoute = require('./routes/api/drivers');

app.use('/api/drivers', apiDriverRoute());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
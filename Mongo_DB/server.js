const PORT = process.env.PORT || 2020;
const express = require('express');
const app = express();

app.use(express.static('public'));
// const pool = require('./lib/db');

const apiDriverRoute = require('./routes/api/drivers');

app.use('/api/drivers', apiDriverRoute());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
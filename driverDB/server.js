require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
app.use(express.static('public'));

const pool = require('./lib/db');

const apiDriverRoute = require('./routes/drivers');
const apiTeamsRoute = require('./routes/teams')



app.use('/api/drivers', apiDriverRoute(pool));
app.use('/api/teams', apiTeamsRoute(pool));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
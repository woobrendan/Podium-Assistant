require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.static('public'));
app.use(cors());
app.use(morgan("dev"));

const pool = require('./lib/db');

const apiDriverRoute = require('./routes/drivers');
const apiTeamsRoute = require('./routes/teams');
const apiVehiclesRoute = require('./routes/vehicles');
const apiResultsRoute = require('./routes/results');
const apiEventsRoute = require('./routes/events');
const apiFastLapRoute = require('./routes/fastLap');


app.use('/api/drivers', apiDriverRoute(pool));
app.use('/api/teams', apiTeamsRoute(pool));
app.use('/api/vehicles', apiVehiclesRoute(pool));
app.use('/api/results', apiResultsRoute(pool));
app.use('/api/events', apiEventsRoute(pool));
app.use('/api/fastlaps', apiFastLapRoute(pool));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
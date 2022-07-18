require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(cors());
app.use(morgan("dev"));

const pool = require('./lib/db');

//API Routes
const apiDriverRoute = require('./routes/api/drivers');
const apiTeamsRoute = require('./routes/api/teams');
const apiVehiclesRoute = require('./routes/api/vehicles');
const apiResultsRoute = require('./routes/api/results');
const apiEventsRoute = require('./routes/api/events');
const apiFastLapRoute = require('./routes/api/fastLap');
const apiSeriesRoute = require('./routes/api/series');

const fastLapRoute = require('./routes/fastlap');
const resultsRoute = require('./routes/results')


app.use('/api/drivers', apiDriverRoute(pool));
app.use('/api/teams', apiTeamsRoute(pool));
app.use('/api/vehicles', apiVehiclesRoute(pool));
app.use('/api/results', apiResultsRoute(pool));
app.use('/api/events', apiEventsRoute(pool));
app.use('/api/fastlaps', apiFastLapRoute(pool));
app.use('/api/series', apiSeriesRoute(pool));


app.use('/fastlaps', fastLapRoute(pool));
app.use('/results', resultsRoute(pool));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
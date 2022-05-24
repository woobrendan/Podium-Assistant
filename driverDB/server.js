require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
app.use(express.static('public'));

const pool = require('./lib/db');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
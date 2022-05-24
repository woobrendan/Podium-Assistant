require("dotenv").config();
const PORT = 8080;
const express = require('express');
const app = express();
app.use(express.static('public'));

const pool = require('')
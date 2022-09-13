const PORT = process.env.PORT || 2020;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
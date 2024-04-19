const express = require('express');
const { static: static_ } = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT

app.use(static_(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  console.log('Request received', req.url);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
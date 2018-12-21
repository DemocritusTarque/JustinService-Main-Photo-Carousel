const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {} = require('../Database/index.js');
const path = require('path');
const port = 3000;

app.use(morgan);
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(path.join(__dirname, '../Client/dist.index.html')));

app.get('/api/seedData', (req, res) => {});

app.listen(port, error => {
  if (error) {
    console.log('error on server not Listening!!!!');
  }
  console.log(`Listening on Port ${port}!`);
});

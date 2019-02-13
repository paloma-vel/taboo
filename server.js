const express = require('express');
const db = require('./database');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/word', (req, res) => {
  db.getRandomWord((result) => {
    if (result.status == "error") {
      res.status(500).send(result.error);
    } else {
      res.status(200).send(result.word);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
const express = require('express');
const cors = require('cors');
const path = require('path');
const { sharksList, catsList } = require('./images');
const { shuffle } = require('./utility');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.resolve(__dirname, '../dist');
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];

app.use(express.static(DIST_DIR));
app.use(cors({
  origin: (origin, callback) => {
    if(!origin) {
      return callback(null, true);
    }
    if(!allowedOrigins.includes(origin)) {
      const msg = 'This specified Origin doesn\'t get access because of the CORS policy for this site';
      return callback(new Error(msg), false); 
    }

    return callback(null, true);
  }
}));

app.get('/', (req, res) => {
  const HTML_FILE = path.join(DIST_DIR, 'index.html');
  res.sendFile(HTML_FILE);
});

app.get('/api/:animalType', (req, res) => {

  res.set('Cache-control', 'no-cache');

  switch(req.params.animalType) {
    case 'images':
      res.send(shuffle([...sharksList, ...catsList]));
      break;
    case 'sharks':
      res.send(sharksList);
      break;
    case 'cats':
      res.send(catsList);
      break
    default:
      return;
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
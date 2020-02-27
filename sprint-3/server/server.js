const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const localPort = 8080;
// const commentRoutes = require('./routes/comments');
const videoRoutes = require('./routes/videos');

const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hey there');
});

app.use('/videos', videoRoutes);

app.listen(process.env.PORT || localPort, () => {
  console.log('Chillin on', process.env.PORT);
});
const express = require('express');
const router = express.Router();

const commentRoutes = (app, fs) => {

  const dataPath = './data/data.json'

  app.get('/', (req, res) => {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

router.post('/', (req, res) => {
  res.send('create new comment');
});

router.post('/new', (req, res) => {
  if (!req.body.comment) res.status(400).send('Need to provide comment body to create a new comment');
  comments.push(req.body.comment);
  return res.status(201).send(comments);
});

module.exports = commentRoutes;
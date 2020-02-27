const express = require('express');
const uuid = require('uuid/v1');
const router = express.Router();
const fs = require('fs');

const videoData = require('../data/data.json')

router.get('/', (req, res) => {
  res.json(videoData);
});

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  let video = videoData.some(videoData => videoData.id === req.params.id);
  console.log(video)
  if (video) {
    send.json(videoData.filter(videoData => videoData.id === req.params.id));
  } else res.status(400).send('No video ID');
});

router.post('/', (req, res) => {
  // console.log(req.body);
  const { body } = req;
  const newVideo = {
    "id": uuid,
    "video": { ...body }
  }
  videoData.push(newVideo)
  // fs.writeFileSync('../data/data.json', JSON.stringify(videoData, null, 2))
  res.status(201).json(newVideo)
})


module.exports = router;

// const videoRoutes = (app, fs) => {

//   const dataPath = './data/data.json'

//   app.get('/videos', (req, res) => {
//     fs.readFile(dataPath, (err, data) => {
//       if (err) {
//         throw err;
//       }

//       res.send(JSON.parse(data));
//     });
//   });
// };

// module.exports = videoRoutes;
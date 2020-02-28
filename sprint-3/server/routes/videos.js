const express = require('express');
const router = express.Router();
const fs = require('fs');

const videoData = require('../data/data.json')

router.get('/', (req, res) => {
  res.json(videoData);
});

router.get('/:id', (req, res) => {
  let reqVid = videoData.some(video => video.id === parseInt(req.params.id));
  if (reqVid) {
    res.json(videoData.find(video => video.id === parseInt(req.params.id)));
  } else res.status(400).send('No video ID');
});

router.post('/', (req, res) => {
  const { body } = req;
  const newVideo = {
    ...body,
    id: Date.now(),
    channel: "The Best One",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    views: "2,001,0",
    likes: "110,90",
    duration: "3:22",
    video: "BrainStation Sample Video.mp4",
    timestamp: Date.now(),
    comments: []
  }
  videoData.push(newVideo)
  fs.writeFile('../data/data.json', JSON.stringify(videoData, null, 2))
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
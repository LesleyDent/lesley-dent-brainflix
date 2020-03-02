const express = require('express');
const router = express.Router();
const fs = require('fs');

const videoData = require('../data/data.json')

router.get('/', (_, res) => {
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
    image: "/static/media/Upload-video-preview.c814c81c.jpg",
    views: "2,001,0",
    likes: "110,90",
    duration: "3:22",
    video: "",
    timestamp: Date.now(),
    comments: []
  }
  videoData.push(newVideo)
  res.status(201).json(newVideo)
})

router.post('/:id/comments', (req, res) => {
  let currentVidExists = videoData.some(video => video.id === parseInt(req.params.id));
  if (currentVidExists) {
    let currentVid = videoData.find((video) => video.id === parseInt(req.params.id));
    let currentVidIndex = videoData.indexOf(currentVid);

    const newComment = {
      ...req.body,
      id: Date.now(),
      likes: 0,
      timestamp: Date.now(),
    }

    currentVid.comments.push(newComment);
    videoData.splice(currentVidIndex, 1, currentVid);

    res.status(201).json(newComment)
  } else res.status(400).send('No video ID');
})

module.exports = router;
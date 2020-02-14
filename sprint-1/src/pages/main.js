import React from 'react';
import Header from '../components/header';
import Video from '../components/video';
import VideoDetails from '../components/videoDetails';
import CommentList from '../components/commentList';

function Main() {
  return (
    <div>
      <Header />
      <Video />
      <VideoDetails />
      <CommentList />
    </div>
  );
}

export default Main;
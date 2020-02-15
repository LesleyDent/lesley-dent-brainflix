import React, { Component } from 'react';
import Header from '../components/header';
import Video from '../components/video';
import VideoDetails from '../components/videoDetails';
import CommentList from '../components/commentList';
import Data from '../data/data.json';
import VideoList from '../components/videosList';

class Main extends Component {
  state = {
    videosList: Data,
    currentVideoId: 100000,
  };

  render() {
    return (
      <div>
        <Header />
        <Video />
        <VideoDetails />
        <CommentList />
        <VideoList data={this.state.videosList} current={this.state.currentVideoId} />
      </div>
    );
  }
}

export default Main;
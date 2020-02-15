import React, { Component } from 'react';
import Header from '../components/header';
import Video from '../components/video';
import CommentList from '../components/commentList';
import Data from '../data/data.json';
import VideoList from '../components/videosList';

class Main extends Component {
  state = {
    videosList: Data,
    currentVideoId: 100000,
  };

  render() {
    const currentVideo = this.state.videosList.filter((video) => video.id === this.state.currentVideoId)[0];

    return (
      <div>
        <Header />
        <Video video={currentVideo} />
        <CommentList video={currentVideo} />
        <VideoList data={this.state.videosList} current={this.state.currentVideoId} />
      </div>
    );
  }
}

export default Main;
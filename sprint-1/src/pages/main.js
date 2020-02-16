import React, { Component } from 'react';
import Header from '../components/header';
import Video from '../components/video';
import CommentList from '../components/commentList';
import Data from '../data/data.json';
import VideoList from '../components/videosList';
import VideoDetails from '../components/videoDetails';

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
        <div className="main-wrapper">
          <div className="main-wrapper__left">
            <VideoDetails video={currentVideo} />
            <CommentList video={currentVideo} />
          </div>
          <VideoList data={this.state.videosList} current={this.state.currentVideoId} />
        </div>
      </div>
    );
  }
}

export default Main;
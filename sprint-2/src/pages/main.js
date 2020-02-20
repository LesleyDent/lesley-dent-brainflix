import React, { Component } from 'react';
import axios from 'axios';
import Video from '../components/video';
import CommentList from '../components/commentList';
import VideoList from '../components/videosList';
import VideoDetails from '../components/videoDetails';

const ApiUrl = 'https://project-2-api.herokuapp.com';
const ApiKey = '?api_key=7b4cdb2a-55b3-4067-bef4-729c915381bb';

class Main extends Component {
  state = {
    videosList: [],
    currentVideoId: false,
    currentVideo: false
  };

  getVideo = (id) => {
    axios
      .get(`${ApiUrl}/videos/${id}${ApiKey}`)
      .then((video) => {
        this.setState({
          currentVideo: video.data,
          currentVideoId: video.data.id
        })
      })
  }

  getVideos = () => {
    axios
      .get(`${ApiUrl}/videos${ApiKey}`)
      .then((response) => {
        this.setState({
          videosList: response.data
        });
        this.getVideo(response.data[0].id)
      })
  }

  componentDidMount() {
    this.getVideos();
  }

  render() {
    return (
      <div>
        <Video video={this.state.currentVideo} />
        <div className="main-wrapper">
          <div className="main-wrapper__left">
            <VideoDetails video={this.state.currentVideo} />
            <CommentList video={this.state.currentVideo} />
          </div>
          <VideoList data={this.state.videosList} current={this.state.currentVideoId} />
        </div>
      </div>
    );
  }
}

export default Main;

// finish upload page
// make logo and upload links clickable
// switch main video
// router
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Video from '../components/video';
import CommentList from '../components/commentList';
import VideoList from '../components/videosList';
import VideoDetails from '../components/videoDetails';
import Upload from '../pages/upload';

const ApiUrl = 'https://project-2-api.herokuapp.com';
const ApiKey = '?api_key=7b4cdb2a-55b3-4067-bef4-729c915381bb';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: [],
      currentVideo: false,
      inputs: {}
    }
  };

  getVideo = (id) => {
    axios
      .get(`${ApiUrl}/videos/${id}${ApiKey}`)
      .then((video) => {
        this.setState({
          currentVideo: video.data
        })
        this.getVideos();
      })
  }

  getVideos = () => {
    axios
      .get(`${ApiUrl}/videos${ApiKey}`)
      .then((response) => {
        this.setState({
          videosList: response.data
        });
        if (!this.state.currentVideo) {
          this.getVideo(response.data[0].id)
        }
      })
  }

  handleInputChange = (inputValue) => {
    this.setState({
      inputs: {
        comment: inputValue
      }
    });
  }

  submitComment = comment => {
    // send to api
    console.log('submit comment!');
  }

  // first time it loads
  componentDidMount() {
    if (this.props.match.params.videoId) {
      this.getVideo(this.props.match.params.videoId);
    } else {
      this.getVideos();
    }
  }

  // additional video loads
  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.getVideo(this.props.match.params.videoId);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return (
      <>
        <Video video={this.state.currentVideo} />
        <div className="main-wrapper">
          <div className="main-wrapper__left">
            <VideoDetails video={this.state.currentVideo} />
            <CommentList
              video={this.state.currentVideo}
              handleInputChange={this.handleInputChange}
              submitComment={this.submitComment}
              comment={this.state.comment}
            />
          </div>
          <VideoList data={this.state.videosList} current={this.props.match.params.videoId || this.state.currentVideo.id} />
        </div>
      </>
    );
  }
}

export default Main;

// make logo and upload links clickable
// switch main video
// router
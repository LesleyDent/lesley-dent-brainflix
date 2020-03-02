import React, { Component } from 'react';
import axios from 'axios';
import Video from '../components/Video';
import CommentList from '../components/CommentList';
import VideoList from '../components/VideosList';
import VideoDetails from '../components/VideoDetails';

const ApiUrl = 'http://localhost:8080';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: [],
      currentVideo: false,
      currentVideoComments: [],
      inputs: '',
      comment: {},
      uploadForm: {}
    };
  };

  handleInputChange = (inputValue) => {
    this.setState({
      inputs: inputValue,
      comment: {
        name: "Rick Astley",
        comment: inputValue
      }
    });
  };

  handleChange = event => {
    event.preventDefault();
    this.handleInputChange(
      event.target.value
    );
  };

  submitComment = (event) => {
    event.preventDefault();
    axios.post(`${ApiUrl}/videos/${this.state.currentVideo.id}/comments`, this.state.comment)
      .then((response) => {
        let tempComments = this.state.currentVideoComments;
        tempComments.unshift(response.data);
        this.setState({
          currentVideoComments: tempComments,
          inputs: ''
        });
      });
  };

  getVideo = (id) => {
    axios
      .get(`${ApiUrl}/videos/${id}`)
      .then((video) => {
        this.setState({
          currentVideo: video.data,
          currentVideoComments: video.data.comments,
        });
        this.getVideos();
      });
  };

  getVideos = () => {
    axios
      .get(`${ApiUrl}/videos`)
      .then((response) => {
        this.setState({
          videosList: response.data
        });
        if (!this.state.currentVideo) {
          this.getVideo(response.data[0].id)
        };
      });
  };


  componentDidMount() {
    this.props.match.params.videoId ? this.getVideo(this.props.match.params.videoId) : this.getVideos();
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId === undefined && this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.getVideo(this.state.videosList[0].id)
    } else if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.getVideo(this.props.match.params.videoId);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
  };

  render() {
    return (
      <>
        <Video video={this.state.currentVideo} />
        <div className="main-wrapper">
          <div className="main-wrapper__left">
            <VideoDetails video={this.state.currentVideo} />
            <CommentList
              handleChange={this.handleChange}
              submitComment={this.submitComment}
              comments={this.state.currentVideoComments}
              inputValue={this.state.inputs}
              video={this.state.currentVideo}
              apiUrl={ApiUrl}
            />
          </div>
          <VideoList data={this.state.videosList} current={parseInt(this.props.match.params.videoId) || this.state.currentVideo.id} />
        </div>
      </>
    );
  };
}

export default Main;
import React, { Component } from 'react';
import axios from 'axios';
import Video from '../components/video';
import CommentList from '../components/commentList';
import VideoList from '../components/videosList';
import VideoDetails from '../components/videoDetails';

const ApiUrl = 'https://project-2-api.herokuapp.com';
const ApiKey = '?api_key=543f8276-7a36-4d7f-b00f-18d5278bd84d';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: [],
      currentVideo: false,
      currentVideoComments: [],
      inputs: '',
      comment: {}
    }
  };

  handleInputChange = (inputValue) => {
    this.setState({
      inputs: inputValue,
      comment: {
        name: "Your mom",
        comment: inputValue
      }
    });
  }

  handleChange = event => {
    event.preventDefault();
    this.handleInputChange(
      event.target.value
    );
  }

  submitComment = (event) => {
    event.preventDefault();
    axios.post(`${ApiUrl}/videos/${this.state.currentVideo.id}/comments${ApiKey}`, this.state.comment)
      .then((response) => {
        let tempComments = this.state.currentVideoComments;
        tempComments.unshift(response.data);
        this.setState({
          currentVideoComments: tempComments,
          inputs: ''
        })
      })
  }

  getVideo = (id) => {
    console.log(id)
    axios
      .get(`${ApiUrl}/videos/${id}${ApiKey}`)
      .then((video) => {
        this.setState({
          currentVideo: video.data,
          currentVideoComments: video.data.comments.reverse()
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


  componentDidMount() {
    this.props.match.params.videoId ? this.getVideo(this.props.match.params.videoId) : this.getVideos();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId === undefined && this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.getVideo(this.state.videosList[0].id)
    } else if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.getVideo(this.props.match.params.videoId);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
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
              handleInputChange={(event) => { this.handleInputChange(event) }}
              handleChange={(event) => { this.handleChange(event) }}
              submitComment={(event) => { this.submitComment(event) }}
              comments={this.state.currentVideoComments}
              inputValue={this.state.inputs}
              video={this.state.currentVideo}
              apiUrl={ApiUrl}
              apiKey={ApiKey}
            />
          </div>
          <VideoList data={this.state.videosList} current={this.props.match.params.videoId || this.state.currentVideo.id} />
        </div>
      </>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import axios from 'axios';
import Video from '../components/video';
import CommentList from '../components/commentList';
import VideoList from '../components/videosList';
import VideoDetails from '../components/videoDetails';

const ApiUrl = 'https://project-2-api.herokuapp.com';
const ApiKey = '?api_key=7b4cdb2a-55b3-4067-bef4-729c915381bb';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: [],
      currentVideo: false,
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


  // inital loads
  componentDidMount() {
    if (this.props.match.params.videoId) {
      this.getVideo(this.props.match.params.videoId);
    } else {
      this.getVideos();
    }
  }

  // additional video loads - prevent infinite loop - fix logo link reload
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

// comments post
// capitalize components folders
// fix button sizes on upload page


//state= main:{} List:[] componentmount - axios.all - axios get - axios get - then responseArray - this.setState main:resArr[1].data, List:resArr[0].data

// render return MainPage main={this.state.main}
// ListPage list={this.state.list]}


// destructuring ::: const {name} = props.main ... {name} instead of {props.name}

// comments: object.values() if!this.state.main.comments=false

// Route path="/" 

// link fix - match params is undefined.

// post .. stop re-render.
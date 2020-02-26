import { Component } from 'react';

class Timestamp extends Component {
  render() {
    let currentTime = Date.now(),
      timeElapsed = (Math.floor((currentTime - this.props.timestamp) / 1000)),
      message = '';

    if (timeElapsed >= 60 && timeElapsed < 120) {
      message = 'About a minute ago';
    } else if (timeElapsed >= 120 && timeElapsed < 3600) {
      message = `${Math.round(timeElapsed / 60)} minutes ago`;
    } else if (timeElapsed >= 3600 && timeElapsed < 86400) {
      message = `${Math.round(timeElapsed / 3600)} hour${Math.round(timeElapsed / 3600) > 1 ? "s" : ""} ago`;
    } else if (timeElapsed >= 86400 && timeElapsed < 2592000) {
      message = `${Math.round(timeElapsed / 86400)} day${Math.round(timeElapsed / 86400) > 1 ? "s" : ""} ago`;
    } else if (timeElapsed >= 2592000 && timeElapsed < 31536000) {
      message = `${Math.round(timeElapsed / 2592000)} month${Math.round(timeElapsed / 2592000) > 1 ? "s" : ""} ago`;
    } else if (timeElapsed > 31536000) {
      message = `${Math.round(timeElapsed / 31536000)} year${Math.round(timeElapsed / 31536000) > 1 ? "s" : ""} ago`;
    } else {
      message = 'Just now';
    }

    return (
      message
    )
  }
}

export default Timestamp;

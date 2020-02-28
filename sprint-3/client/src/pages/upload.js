import './upload-styles.scss';
import React, { Component } from 'react';
import UploadVideoThumb from '../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';

const ApiUrl = 'http://localhost:8080';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  };

  submitVideo = (event) => {
    event.preventDefault();
    axios.post(`${ApiUrl}/videos`, { title: this.state.title, description: this.state.description })
      .then((response) => {
        console.log(response)
      });
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <div className="upload-video" >
        <h1 className="upload-video__title">Upload Video</h1>
        <form
          className="upload-video__form"
          action="" method="POST"
          autoComplete="on"
          onSubmit={this.submitVideo}
        >
          <div className="upload-video__wrapper">
            <div className="upload-video__form-group--flex">
              <label className="upload-video__label" forhtml="textarea">VIDEO THUMBNAIL</label>
              <img className="upload-video__image" src={UploadVideoThumb} alt="Video Thumbnail" />
            </div>
            <div className="upload-video__details">
              <div className="upload-video__form-group">
                <label className="upload-video__label" forhtml="textarea">TITLE YOUR VIDEO</label>
                <textarea
                  className="upload-video__input"
                  rows="1"
                  placeholder="Add a title to your video"
                  maxLength="200"
                  required
                  onChange={(event) => { this.handleInputChange('title', event.target.value) }}
                  value={this.state.title}
                >
                </textarea>
              </div>
              <div className="upload-video__form-group">
                <label className="upload-video__label" forhtml="textarea">ADD A VIDEO DESCRIPTION</label>
                <textarea
                  className="upload-video__input"
                  rows="4"
                  placeholder="Add a description of your video"
                  maxLength="600"
                  required
                  onChange={(event) => { this.handleInputChange('description', event.target.value) }}
                  value={this.state.description}
                >
                </textarea>
              </div>
            </div>
          </div>
          <div className="upload-video__button-wrapper">
            <button type="submit" className="button upload-video__button">PUBLISH</button>
            <button
              type="submit"
              className="upload-video__button upload-video__button--different"

            >
              CANCEL
          </button>
          </div>
        </form>
      </div>
    )
  };
}
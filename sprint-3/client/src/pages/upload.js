import './upload-styles.scss';
import React from 'react';
import UploadVideoThumb from '../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';

const ApiUrl = 'http://localhost:8080';

export default function Upload() {
  // state = {
  //   posted: false
  //   title: "",


  const submitVideo = (event) => {
    event.preventDefault();
    // this.setState({ posted: true });
    axios.post(`${ApiUrl}/videos`, { title: event.target.title.value, description: event.target.description.value });
    event.target.reset()
  }

  // render() {
  return (
    <div className="upload-video" >
      <h1 className="upload-video__title">Upload Video</h1>
      <form
        className="upload-video__form"
        action="" method="POST"
        autoComplete="on"
        onSubmit={(event) => { submitVideo(event) }}
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
                name='title'
                className="upload-video__input"
                rows="1"
                placeholder="Add a title to your video"
                maxLength="200"
                required
              >
              </textarea>
            </div>
            <div className="upload-video__form-group">
              <label className="upload-video__label" forhtml="textarea">ADD A VIDEO DESCRIPTION</label>
              <textarea
                name='description'
                className="upload-video__input"
                rows="4"
                placeholder="Add a description of your video"
                maxLength="600"
                required
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
      {/* {this.state.posted ? <div className="upload__success">Posted Successfully.</div> : null} */}
    </div>
  )
  // };
  // }
};
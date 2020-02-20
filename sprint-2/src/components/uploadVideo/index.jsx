import React from 'react';
import './styles.scss';

function UploadVideo() {
  return (
    <div className="upload-video">
      <h1 className="upload-video__title">Upload Video</h1>
      <form className="upload-video__form" action="" method="POST" autoComplete="on">
        <div className="upload-video__form-group">
          <label className="upload-video__label" forhtml="textarea">VIDEO THUMBNAIL</label>
          <img className="upload-video__image" src="" alt="Video Thumbnail" />
        </div>
        <div className="upload-video__details">
          <div className="upload-video__form-group">
            <label className="upload-video__label" forhtml="textarea">TITLE YOUR VIDEO</label>
            <textarea className="upload-video__input" rows="1" placeholder="Add a title to your video" maxLength="200" required=""></textarea>
          </div>
          <div className="upload-video__form-group">
            <label className="upload-video__label" forhtml="textarea">ADD A VIDEO DESCRIPTION</label>
            <textarea className="upload-video__input" rows="3" placeholder="Add a description of your video" maxLength="400" required=""></textarea>
          </div>
        </div>
        <button type="submit" className="button upload-video__button">PUBLISH</button>
        <button type="submit" className="button upload-video__button">CANCEL</button>
      </form>

    </div>
  )
}

export default UploadVideo

// recipeForm and recipeSearch

// further components - buttons, inputs, 
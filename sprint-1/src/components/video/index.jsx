import React from 'react';
import './styles.scss';
import VideoSrc from '../../assets/Video/BrainStation Sample Video.mp4';
import Poster from '../../assets/Images/video-list-0.jpg';
import Play from '../../assets/Icons/SVG/Icon-play.svg';
import Scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import Fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';


function Video() {
  return (
    <div className="video">
      <video className="video__source" src={VideoSrc} poster={Poster} />
      <div className="video__controls">
        <div className="video__control-wrapper">
          <img className="video__control-icon" src={Play} alt="Play Icon" />
        </div>
        <div className="video__control-wrapper video__control-wrapper--scrubber">
          <img className="video__control-icon video__control-icon--scrubber" src={Scrubber} alt="Scrubber Icon" />
        </div>
        <div className="video__control-wrapper">
          <img className="video__control-icon" src={Fullscreen} alt="Fullscreen Icon" />
          <img className="video__control-icon" src={Volume} alt="Volume Icon" />
        </div>
      </div>
    </div>
  );
}

export default Video;

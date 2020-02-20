import React from 'react';
import './styles.scss';
import Play from '../../assets/Icons/SVG/Icon-play.svg';
// import Scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import Fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';


function Video(props) {
  return (
    <div className="video">
      <div className="video__wrapper">
        <video
          className="video__source"
          src={props.video.video}
          poster={props.video.image}
        />
        <div className="video__controls">
          <div className="video__control-wrapper">
            <img className="video__control-icon" src={Play} alt="Play Icon" />
          </div>
          <div className="video__control-wrapper video__control-wrapper--scrubber">
            {/* <img className="video__control-icon video__control-icon--scrubber" src={Scrubber} alt="Scrubber Icon" /> */}
            <span className="video__duration">0:00 / {props.video.duration}</span>
          </div>
          <div className="video__control-wrapper">
            <img className="video__control-icon" src={Fullscreen} alt="Fullscreen Icon" />
            <img className="video__control-icon" src={Volume} alt="Volume Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
import React from 'react';
import './styles.scss';
import Video from '../../assets/Video/BrainStation Sample Video.mp4';
import Poster from '../../assets/Images/video-list-0.jpg';
import Play from '../../assets/Icons/SVG/Icon-play.svg';
import Scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import Fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';


function Hero() {
  return (
    <div className="hero">
      <video className="hero__video" src={Video} poster={Poster} />
      <div className="hero__controls">
        <div className="hero__control-wrapper">
          <img className="hero__control-icon" src={Play} alt="Play Icon" />
        </div>
        <div className="hero__control-wrapper hero__control-wrapper--scrubber">
          <img className="hero__control-icon hero__control-icon--scrubber" src={Scrubber} alt="Scrubber Icon" />
        </div>
        <div className="hero__control-wrapper">
          <img className="hero__control-icon" src={Fullscreen} alt="Fullscreen Icon" />
          <img className="hero__control-icon" src={Volume} alt="Volume Icon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

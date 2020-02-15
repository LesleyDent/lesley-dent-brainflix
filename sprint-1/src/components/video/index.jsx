import React from 'react';
import './styles.scss';
import Play from '../../assets/Icons/SVG/Icon-play.svg';
import Scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import Fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';
import ViewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg';
import Timestamp from '../../components/timestamp';


function Video(props) {
  return (
    <div className="video">
      <div className="video__wrapper">
        <video
          className="video__source"
          src={require(`../../assets/Video/${props.video.video}`)}
          poster={require(`../../assets/Images/${props.video.image}`)}
        />
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
      <div className="video__details">
        <h1 className="video__title h2">{props.video.title}</h1>
        <span className="video__author">By {props.video.channel}</span>
        <span className="video__date"><Timestamp timestamp={props.video.timestamp} /></span>
        <div className="video__stats">
          <span className="video__stat">
            <img src={ViewsIcon} alt="Views Icon" className="video__stat-icon" />
            <span className="video__stat-text">{props.video.views}</span>
          </span>
          <span className="video__stat">
            <img src={LikesIcon} alt="Likes Icon" className="video__stat-icon" />
            <span className="video__stat-text">{props.video.likes}</span>
          </span>
        </div>
        <div className="video__description">
          <p>{props.video.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
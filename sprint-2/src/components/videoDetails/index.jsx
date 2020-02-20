import React from 'react';
import './styles.scss';
import ViewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg';
import Timestamp from '../timestamp';

// const apiUrl = 'https://project-2-api.herokuapp.com';
// const apiKey = '?api_key=acd287e0-160c-4db4-885a-040070e9c093';


function VideoDetails(props) {
  return (
    <div className="video-details__info">
      <h1 className="video-details__title">{props.video.title}</h1>
      <div className="video-details__details">
        <div className="video-details__detail-wrapper">
          <span className="video-details__author">By {props.video.channel}</span>
          <span className="video-details__date"><Timestamp timestamp={props.video.timestamp} /></span>
        </div>
        <div className="video-details__detail-wrapper">
          <span className="video-details__stat">
            <img src={ViewsIcon} alt="Views Icon" className="video-details__stat-icon" />
            <span className="video-details__stat-text">{props.video.views}</span>
          </span>
          <span className="video-details__stat">
            <img src={LikesIcon} alt="Likes Icon" className="video-details__stat-icon" />
            <span className="video-details__stat-text">{props.video.likes}</span>
          </span>
        </div>
      </div>
      <div className="video-details__description">
        <p>{props.video.description}</p>
      </div>
    </div>
  );
}

export default VideoDetails;
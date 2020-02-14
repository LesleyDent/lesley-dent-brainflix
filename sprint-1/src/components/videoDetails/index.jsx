import React from 'react';
import './styles.scss';
import ViewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg';


function VideoDetails() {
  return (
    <section className="video-details">
      <div className="video-details__header">
        <h1 className="video-details__title h2">BMX Rampage: 2018 Highlights</h1>
        <span className="video-details__author">By Red Cow</span><span className="video-details__date">12/18/2018</span>
        <div className="video-details__stats">
          <span className="video-details__stat">
            <img src={ViewsIcon} alt="Views Icon" className="video-details__stat-icon" />
            <span className="video-details__stat-text">1,001,023</span>
          </span><span className="video-details__stat">
            <img src={LikesIcon} alt="Likes Icon" className="video-details__stat-icon" />
            <span className="video-details__stat-text">110,985</span>
          </span>
        </div>
      </div>
      <div className="video-details__body">
        <p>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
      </div>
    </section>
  );
}

export default VideoDetails;

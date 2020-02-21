import React from 'react';
import './styles.scss';
import EllipsisText from "react-ellipsis-text";
import { Link } from 'react-router-dom';

function VideoListItem(props) {
  return (
    <Link to={`/video/${props.data.id}`} className="video-list-item">
      <img
        className="video-list-item__image"
        src={props.data.image}
        alt="Video Thumbnail"
      />
      <div className="video-list-item__info">
        <h4><EllipsisText className="video-list-item__title h4" text={props.data.title} length={40} /></h4>
        <p className="video-list-item__channel">{props.data.channel}</p>
      </div>
    </Link>
  );
}

export default VideoListItem;

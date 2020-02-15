import React from 'react';
import './styles.scss';


function VideoListItem(props) {
  return (
    <div className="video-list-item">
      <img
        className="video-list-item__image"
        src={require(`../../assets/Images/${props.data.image}`)}
        alt="Video Thumbnail"
      />
      <div className="video-list-item__info">
        <h4 className="video-list-item__title">{props.data.title}</h4>
        <p className="video-list-item__channel">{props.data.channel}</p>
      </div>
    </div>
  );
}

export default VideoListItem;

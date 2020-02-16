import React from 'react';
import './styles.scss';
import EllipsisText from "react-ellipsis-text";

function VideoListItem(props) {
  return (
    <div className="video-list-item">
      <img
        className="video-list-item__image"
        src={require(`../../assets/Images/${props.data.image}`)}
        alt="Video Thumbnail"
      />
      <div className="video-list-item__info">
        {/* tried out this ellisis thing for funsies */}
        <h4><EllipsisText className="video-list-item__title h4" text={props.data.title} length={"40"} /></h4>
        <p className="video-list-item__channel">{props.data.channel}</p>
      </div>
    </div>
  );
}

export default VideoListItem;

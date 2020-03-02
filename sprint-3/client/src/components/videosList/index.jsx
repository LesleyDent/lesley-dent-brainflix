import React from 'react';
import './styles.scss';
import VideoListItem from '../VideoListItem';

function VideosList(props) {
  return (
    <div className="videos-list">
      <h2 className="videos-list__title">NEXT VIDEO</h2>
      {props.data
        .filter(video => {
          return video.id !== props.current;
        })
        .map((video) => {
          return <VideoListItem key={video.id} data={video} />
        })}
    </div>
  );
}

export default VideosList;

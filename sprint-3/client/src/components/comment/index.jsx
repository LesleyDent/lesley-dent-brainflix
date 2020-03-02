import React from 'react';
import './styles.scss';
import Timestamp from '../Timestamp';


function Comment(props) {
  return (
    <div className="comments__item">
      <img src={"http://placekitten.com/50/50"} className="comments__image" alt="User icon" />
      <div className="comments__wrap">
        <div className="comments__info">
          <h4 className="comments__author">{props.data.name}</h4>
          <p className="comments__time" data-post-time="1530744338878"><Timestamp timestamp={props.data.timestamp} /></p>
        </div>
        <p className="comments__text">{props.data.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
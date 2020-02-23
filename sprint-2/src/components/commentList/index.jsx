import React from 'react';
import './styles.scss';
import Comment from '../comment';
import CommentForm from '../commentForm';

function CommentList(props) {
  if (props.video) {
    return (
      <div className="comments-list">
        <h2 className="comments-list__count">{props.video.comments.length} Comments</h2>
        <CommentForm
          id={props.video.id}
          apiUrl={props.apiUrl}
          apiKey={props.apiKey}
        />
        {
          props.video.comments
            .map((comment) => {
              return <Comment key={comment.id} data={comment} />
            })
        }
      </div>
    );
  } else {
    return null
  }
}

export default CommentList;

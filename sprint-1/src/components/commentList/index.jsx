import React from 'react';
import './styles.scss';
import Comment from '../comment';
import CommentForm from '../commentForm';

function CommentList(props) {
  return (
    <div className="comments-list">
      <h2 className="comments-list__count">{props.video.comments.length} Comments</h2>
      <CommentForm />
      {props.video.comments
        .map((comment) => {
          return <Comment key={comment.id} data={comment} />
        })}

    </div>
  );
}

export default CommentList;

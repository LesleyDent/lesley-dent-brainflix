import React from 'react';
import './styles.scss';
import Comment from '../comment';
import CommentForm from '../commentForm';

function CommentList() {
  return (
    <div className="comments-list">
      <h2 className="comments-list__count">3 Comments</h2>
      <CommentForm />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default CommentList;

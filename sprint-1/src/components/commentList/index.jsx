import React from 'react';
import './styles.scss';
import Comment from '../comment';
import CommentForm from '../commentForm';

function CommentList() {
  return (
    <div class="comments-list">
      <p className="comments-list__count">3 Comments</p>
      <CommentForm />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default CommentList;

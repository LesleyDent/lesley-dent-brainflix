import React, { Component } from 'react';
import './styles.scss';
import Comment from '../Comment';
import CommentForm from '../CommentForm';

export default class CommentList extends Component {
  render() {
    if (this.props.video.comments) {
      return (
        <div className="comments-list">
          <h2 className="comments-list__count">{this.props.video.comments.length} Comments</h2>
          <CommentForm
            handleChange={this.props.handleChange}
            submitComment={this.props.submitComment}
            value={this.props.inputValue}
            id={this.props.video.id}
            apiUrl={this.props.apiUrl}
          />
          {
            this.props.comments
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
}
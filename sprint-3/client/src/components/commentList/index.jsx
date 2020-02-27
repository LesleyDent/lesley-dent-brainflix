import React, { Component } from 'react';
import './styles.scss';
import Comment from '../comment';
import CommentForm from '../commentForm';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.video.comments) {
      return (
        <div className="comments-list">
          <h2 className="comments-list__count">{this.props.video.comments.length} Comments</h2>
          <CommentForm
            handleInputChange={(event) => { this.props.handleInputChange(event) }}
            handleChange={(event) => { this.props.handleChange(event) }}
            submitComment={(event) => { this.props.submitComment(event) }}
            value={this.props.inputValue}
            id={this.props.video.id}
            apiUrl={this.props.apiUrl}
          // apiKey={this.props.apiKey}
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
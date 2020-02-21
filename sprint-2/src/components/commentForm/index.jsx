import React, { Component } from 'react';
import './styles.scss';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.props.handleInputChange(
      e.target.value
    );
  }

  render() {
    console.log('form', this.props);
    return (
      <form className="comments__form" action="" method="POST" autoComplete="on">
        <img className="comments__image" src={UserIcon} alt="Author avatar" />
        <div className="comments__details">
          <div className="comments__form-group">
            <label className="comments__label" forhtml="textarea">JOIN THE CONVERSATION</label>
            <textarea
              className="comments__input"
              rows="3"
              placeholder="Write comment here"
              maxLength="400"
              required=""
              name="commentText"
              value={this.props.value}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="button comments__button"
            onClick={this.props.submitComment(this.props.comment)}
          >
            COMMENT
          </button>
        </div>
      </form>
    );
  }
}
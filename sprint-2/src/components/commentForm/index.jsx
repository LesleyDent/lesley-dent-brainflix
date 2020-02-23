import React, { Component } from 'react';
import './styles.scss';
import axios from 'axios';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {}
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      inputs: {
        name: "John Smith",
        comment: event.target.value
      }
    });
    console.log('HANDLE CHANGE', event.target.value)
  }

  submitComment = event => {
    event.preventDefault();
    axios.post(`${this.props.apiUrl}/videos/${this.props.id}/comments${this.props.apiKey}`, this.state.inputs)
      .then((response) => {
        console.log('I AM RESPONDING', response)
        // this.setState({
        //   comment: response
        // });
      })

    console.log('SUBMIT COMMENT!', this.state.inputs.comment);
  }

  render() {
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
              required
              name="commentText"
              value={this.props.value}
              onInput={(event) => { this.handleChange(event) }}
            />
          </div>
          <button
            type="submit"
            className="button comments__button"
            onClick={(event) => { this.submitComment(event) }}
          >
            COMMENT
          </button>
        </div>
      </form>
    );
  }
}
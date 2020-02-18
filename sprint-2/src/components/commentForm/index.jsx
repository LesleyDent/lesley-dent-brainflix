import React from 'react';
import './styles.scss';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';


function CommentForm() {
  return (
    <form className="comments__form" action="" method="POST" autoComplete="on">
      <img className="comments__image" src={UserIcon} alt="Author avatar" />
      <div className="comments__details">
        <div className="comments__form-group">
          <label className="comments__label" forhtml="textarea">JOIN THE CONVERSATION</label>
          <textarea className="comments__input" rows="3" placeholder="Write comment here" maxLength="400" required=""></textarea>
        </div>
        <button type="submit" className="button comments__button">COMMENT</button>
      </div>
    </form>
  );
}

export default CommentForm;

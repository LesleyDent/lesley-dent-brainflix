import React from 'react';
import './styles.scss';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';


function CommentForm() {
  return (
    <form class="comments__form" action="" method="POST" autocomplete="on">
      <img class="comments__image" src={UserIcon} alt="Author avatar" />
      <div class="comments__details">
        <div class="comments__form-group">
          <label class="comments__label" for="textarea">JOIN THE CONVERSATION</label>
          <textarea class="comments__input" rows="3" placeholder="Write comment here" maxlength="400" required=""></textarea>
        </div>
        <button type="submit" class="button comments__button">COMMENT</button>
      </div>
    </form>
  );
}

export default CommentForm;

import React from 'react';
import './styles.scss';


function Comment() {
  return (
    <div class="comments__item">
      <img src="http://placekitten.com/105/105" class="comments__image" />
      <div class="comments__wrap">
        <div class="comments__info">
          <h4 class="comments__author">Micheal Lyons</h4>
          <p class="comments__time" data-post-time="1530744338878">2 years ago</p>
        </div>
        <p class="comments__text">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.</p>
        {/* <div class="comments__buttons">
          <button class="comments__deltaco">delete</button>
          <button class="comments__like">♡ 0</button>
        </div> */}
      </div>
    </div>
  );
}

export default Comment;

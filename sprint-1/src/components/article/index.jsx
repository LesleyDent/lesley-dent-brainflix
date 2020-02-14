import React from 'react';
import './styles.scss';
import ViewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg';


function Article() {
  return (
    <article className="article">
      <div className="article__header">
        <h1 className="article__title h2">BMX Rampage: 2018 Highlights</h1>
        <span className="article__author">By Red Cow</span><span className="article__date">12/18/2018</span>
        <div className="article__stats">
          <span className="article__stat">
            <img src={ViewsIcon} alt="Views Icon" className="article__stat-icon" />
            <span className="article__stat-text">1,001,023</span>
          </span><span className="article__stat">
            <img src={LikesIcon} alt="Likes Icon" className="article__stat-icon" />
            <span className="article__stat-text">110,985</span>
          </span>
        </div>
      </div>
      <div className="article__body">
        <p>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
      </div>
    </article>
  );
}

export default Article;

import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Article from '../components/article';
import CommentList from '../components/commentList';

function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <Article />
      <CommentList />
    </div>
  );
}

export default Main;
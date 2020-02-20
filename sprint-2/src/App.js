import React from 'react';
import './App.css';
import 'normalize.css';
import Main from './pages/main.js';
// import Upload from './pages/upload'
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <Upload /> */}
    </>
    // use switch here
  );
}

export default App;

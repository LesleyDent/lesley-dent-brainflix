import React from 'react';
import './App.css';
import 'normalize.css';
import Main from './pages/main';
import Upload from './pages/upload';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          exact path="/" component={Main} />
        <Route
          path="/video/:videoId" component={Main} />
        <Route
          path="/upload" component={Upload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

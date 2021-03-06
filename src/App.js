import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header/header';
import Game from './components/game/game';
import Home from './components/home/home';

function App() {
  return (
    <>
      <>
        <Router>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Route path='/game' component={Game}/>
        </Router>
      </>
    </>
  );
}

export default App;

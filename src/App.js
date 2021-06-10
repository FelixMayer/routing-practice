import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Num from './components/Num';
import Word from './components/Word';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Num path="/:number" />
        <Word path="/:entry" />
        <Color path="/:word/:text/:bg" />
      </Router>
    </div>
  );
}

export default App;

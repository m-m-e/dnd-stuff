import React from 'react';
import { Router, Link } from "@reach/router";
import Home from './Home';
import Gameplay from './Gameplay';

const App = () => {
  return (
    <div className="App">
      <nav>
      <Link to="/">Home</Link>
      <Link to="/gameplay"> | Gameplay</Link>
      </nav>
      <h1>Dnd Fight Generator!</h1>

      <Router>
      <Home path="/" />
      <Gameplay path="/gameplay" />
    </Router>
    </div>
  );
}

export default App;

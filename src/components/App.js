import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import Home from './Home';
import Gameplay from './Gameplay';
import Groups from './Groups';
import { fetchGroups, fetchSelectedGroup } from '../localStorage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      selectedGroup: {},
    }
  }

  componentDidMount() {
    const groups = JSON.parse(fetchGroups()) || [];
    const selectedGroup = JSON.parse(fetchSelectedGroup()) || [];
    this.setState({ groups, selectedGroup });
  }

  render() {
    const { groups, selectedGroup } = this.state;
    return (
      <div className="App">
        <nav>
        <Link to="/">Home</Link>
        <Link to="/groups"> | Groups</Link>
        <Link to="/gameplay"> | Gameplay</Link>
        </nav>
        <h1>Dnd Fight Generator!</h1>
  
        <Router>
          <Home path="/" groups={groups} />
          <Groups path="/groups" groups={groups} />
          <Gameplay path="/gameplay" selectedGroup={selectedGroup} />
        </Router>
      </div>
    );
  }
}

export default App;

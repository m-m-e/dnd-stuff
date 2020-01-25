import React, { Component } from 'react';
import './style.css';
import { saveSelectedGroup } from '../../localStorage';

class Groups extends Component {
  constructor(props) {
    super(props);

    this.handleSelectClick = group => {
      this.setState({ selectedGroup: group })
      saveSelectedGroup(group);
    }
  }

  render() {
    const { groups } = this.props;
    return (
      <section>
        <h2>Groups</h2>
        {groups.map((group, index) => {
          return (
          <ul key={index} className={`group`} onClick={() => this.handleSelectClick(group)}>
            {group.map((groupMember, index) => <li key={index}>{groupMember.name}</li>)}
          </ul>
          )
        })}
      </section>
    )
  }
}

export default Groups;
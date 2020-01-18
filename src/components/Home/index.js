import React, { Component } from 'react';
import { data } from '../../data';
import Search from '../Search';
import CardList from '../CardList';
import './style.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      group: [],
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleCardClick(event) {
    const { id } = event.currentTarget;
    const chosenCard = data.find(element => id === element.id.toString());
    this.setState({ group: [...this.state.group, chosenCard]})
  }

  handleRemoveClick(event) {
    const { id } = event.currentTarget;
    const { group } = this.state;
    const newGroup = group.filter(element => id !== element.id.toString());
    this.setState({ group: newGroup })
  }

  render() {
    const { group } = this.state;
    const { handleCardClick, handleRemoveClick } = this;
    return (
      <div className='home'>
        <section className='search_section'>
          <h1 className='home_title'>Home</h1>

          <Search />
          <CardList data={data} handleClickFunction={handleCardClick} />

        </section>
        <section>
          <h2 className='group_section'>Group</h2>
          <CardList data={group} handleClickFunction={handleRemoveClick} />
        </section>
      </div>
    )
  }
}

export default Home;
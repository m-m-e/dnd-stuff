import React, { Component } from 'react';
import { data } from '../../data';
import './home.css';

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
    const { id } = event.currentTarget.parentElement;
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

          <div className='search'>
            <label htmlFor='search'></label>
            <input type='text' name='search'></input>
            <button className='search_button'>Search</button>
          </div>

          <div className='search_cards'>
          {data.map(({ name, id, hp }) => 
            <div 
              className='card search_card'
              key={id}
              onClick={handleCardClick}
              id={id}
            >
              <p>Name: {name}</p>
              <p>HP: {hp}</p>
            </div>
          )}
          </div>
        </section>
        <section>
          <h2 className='group_section'>Group</h2>
          <div className='group_cards'>
          {group.map(({ name, id, hp }) =>
            <div 
              className='card_container'
              key={id}
              id={id}
            >
              <div className='card group_card'>
                <p>{name}</p>
                <p>{hp}</p>
              </div>
            <p className='remove-button' onClick={handleRemoveClick}>X</p>
            </div>
          )}
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
import React, { Component } from 'react';
import { data } from '../../data';
import Search from '../Search';
import CardList from '../CardList';
import './style.css';
import Button from '../Button';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      group: [],
      inputText: '',
    };

    this.handleCardClick = (event) => {
      const { id } = event.currentTarget;
      const chosenCard = data.find(element => id === element.id.toString());
      this.setState({ group: [...this.state.group, chosenCard]})
    }

    this.handleRemoveClick = (event) => {
      const { id } = event.currentTarget;
      const { group } = this.state;
      const newGroup = group.filter(element => id !== element.id.toString());
      this.setState({ group: newGroup })
    }

    this.handleInput = (e) => {
      this.setState({ inputText : e.currentTarget.value })
    }
  }

  render() {
    const { group, inputText } = this.state;
    const { handleCardClick, handleRemoveClick, handleInput } = this;
    return (
      <div className='home'>
        <section className='search_section'>
          <h2 className='home_title'>Home</h2>

          <Search inputHandler={handleInput} inputText={inputText} />
          <CardList data={data} handleClickFunction={handleCardClick} />

        </section>
        <section>
          <h2 className='group_section'>Group</h2>
          <CardList data={group} handleClickFunction={handleRemoveClick} />

          <div className='button_container'>
            <Button text='Save group' handleClickFunction={()=>{}} />
            <Button text='Start gameplay' handleClickFunction={()=>{}} />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
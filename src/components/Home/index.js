import React, { Component } from 'react';
import { data } from '../../data/output/dnd_monsters_5e.js';
import Search from '../Search';
import CardList from '../CardList';
import './style.css';
import Button from '../Button';
import { saveGroups } from '../../localStorage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups || [],
      newGroup: [],
      inputText: '',
      groupName: '',
    };

    this.handleCardClick = (event) => {
      const { id } = event.currentTarget;
      const { newGroup } = this.state;
      const chosenCard = {...data.find(element => id === element.id.toString())};
      chosenCard.id = `${id}-${newGroup.length}`;
      this.setState({ newGroup: [...newGroup, chosenCard]})
    }

    this.handleRemoveClick = (event) => {
      const { id } = event.currentTarget;
      const { newGroup } = this.state;
      const group = newGroup.filter(element => id !== element.id.toString());
      this.setState({ newGroup: group })
    }

    this.handleInput = (e) => {
      this.setState({ inputText : e.currentTarget.value })
    }

    this.handleSaveClick = () => {
      const newGroup = { groupName: this.state.groupName, members: this.state.newGroup }
      const newGroupsList = [...this.state.groups, newGroup];
      this.setState({ groups: newGroupsList, newGroup: [], groupName: '' });
      saveGroups(newGroupsList);
    }
    this.handleNameChange = e => {
      this.setState({ groupName: e.currentTarget.value});
    }
  }

  componentDidUpdate(prevProps) {
    const { groups } = this.props;
    if (prevProps.groups !== groups) {
      this.setState({ groups });
    }
  }

  render() {
    const { newGroup, inputText, groupName } = this.state;
    const { handleCardClick, handleRemoveClick, handleInput, handleSaveClick, handleNameChange } = this;
    return (
      <div className='home'>
        <section className='search_section'>
          <h2 className='home_title'>Home</h2>

          <Search inputHandler={handleInput} inputText={inputText} />
          <CardList
            data={data.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()))}
            handleClickFunction={handleCardClick}
          />

        </section>
        <section>
          <h2 className='group_section'>Group</h2>
          <div className='button_container'>
            <Button text='Save group' handleClickFunction={handleSaveClick} />
            <Button text='Start gameplay' handleClickFunction={()=>{}} />
          </div>

          <CardList data={newGroup} handleClickFunction={handleRemoveClick} />
          <label htmlFor="groupName">Group name:</label>
          <input onChange={handleNameChange} type='text' value={groupName} name="groupName" />
        </section>
      </div>
    )
  }
}

export default Home;
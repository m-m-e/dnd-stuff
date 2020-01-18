import React from 'react';
import Button from '../Button';

const Search = ({ inputText, inputHandler }) =>
  <div className='search'>
    <label htmlFor='search'></label>
    <input
      type='text'
      name='search'
      onChange={inputHandler}
      value={inputText}
    />
    <Button text='Search' />
  </div>

export default Search;
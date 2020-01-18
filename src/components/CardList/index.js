import React from 'react';

const CardList = ({ data, handleClickFunction}) =>
  <div className='cards'>
    {data && data.map(({ name, id, hp }) => 
      <div 
        className='card'
        key={id}
        onClick={handleClickFunction}
        id={id}
      >
        <p>Name: {name}</p>
        <p>HP: {hp}</p>
      </div>
    )}
  </div>

export default CardList;
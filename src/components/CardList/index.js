import React from 'react';

const CardList = ({ data, handleClickFunction }) =>
  <div className='cards'>
    {data && data.map(({ name, id, hp, url }) => 
      <div 
        className='card'
        key={id}
        onClick={handleClickFunction}
        id={id}
      >
        <p>Name: {name}</p>
        <p>HP: {hp}/{hp}</p>
        {url && <img src={url} alt='creature' />}
      </div>
    )}
  </div>

export default CardList;
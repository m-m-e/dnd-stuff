import React from 'react';

const CardList = ({ data, handleClickFunction }) =>
  <div className='cards'>
    {data && data.map(({ name, id, hp, img_url }) => 
      <div 
        className='card'
        key={id}
        onClick={handleClickFunction}
        id={id}
      >
        <p>Name: {name}</p>
        <p>HP: {hp.default} / {hp.default}</p>
        {img_url && <img src={img_url} alt='creature' />}
      </div>
    )}
  </div>

export default CardList;
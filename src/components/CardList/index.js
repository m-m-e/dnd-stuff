import React from 'react';

const CardList = ({ data, handleClickFunction }) =>
  <div className='cards'>
    {data && data.map(({ name, type, challenge_lvl, id, hp, img_url }) => 
      <div 
        className='card'
        key={id}
        onClick={handleClickFunction}
        id={id}
      >
        <p><strong>{name}</strong> ({type})</p>
        <p><strong>HP</strong> {hp.default}</p>
        {img_url && <img src={img_url} alt='creature' className='card_image' />}
        <p><strong>Challenge lvl:</strong> {challenge_lvl}</p>
      </div>
    )}
  </div>

export default CardList;
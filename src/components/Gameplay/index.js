import React, { Component } from 'react'

class Gameplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: this.props.selectedGroup || {}
    }
  }

  componentDidUpdate(prevprops) {
    const { selectedGroup } = this.props;
    if (prevprops.selectedGroup !== selectedGroup) {
      this.setState({ selectedGroup });
    }
  }

  render() {
    const { selectedGroup } = this.state;
    return (
    <section>
      <h2>Gameplay</h2>

      <div className='cards'>
          {selectedGroup.members && selectedGroup.members.map(({ name, type, challenge_lvl, id, hp, img_url }) => 
            <div 
              className='card'
              key={id}
              onClick={() => {}}
              id={id}
            >
              <p><strong>{name}</strong> ({type})</p>
              <p><strong>HP</strong> {hp.default}</p>
              {img_url && <img src={img_url} alt='creature' className='card_image' />}
              <p><strong>Challenge lvl:</strong> {challenge_lvl}</p>
            </div>
          )}
        </div>
    </section>
    )
  }  
}

export default Gameplay;
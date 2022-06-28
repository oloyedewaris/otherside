import React, { useState } from 'react';
import './Sdk.css';

const checkedData = [
  {
    id: 1,
    name: 'CHARACTER CREATION',
    checked: false
  },
  {
    id: 2,
    name: 'CHARACTER SKINS',
    checked: false
  },
  {
    id: 3,
    name: 'IN-GAME RESOURCES',
    checked: false
  },
  {
    id: 4,
    name: 'RICH GAMING',
    checked: false
  },
  {
    id: 5,
    name: 'CASUAL/MINI GAMING',
    checked: false
  },
  {
    id: 6,
    name: 'OTHER',
    checked: false
  }
]

function Sdk() {
  const [checkedState, setCheckedState] = useState(checkedData)

  const handleCheck = elem => {
    setCheckedState(currState => {
      const newElem = { name: elem.name, checked: !elem.checked };
      const newArr = currState.filter(state => state.name !== elem.name);
      return [...newArr, newElem].sort(elem => elem.id)
    })
  }

  return (
    <div className='sdk_main'>
      <h1 className='sdk_header'>Its your <br /> world to build</h1>
      <form className='sdk_form'>
        <fieldset>
          <label>Name</label>
          <input type='text' />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input type='email' />
        </fieldset>
        <fieldset>
          <label>Please describe yourself / your company.<br />What is your field of focus?</label>
          <textarea type='text' />
          <span>Be sure to only use alphanumeric characters, commas, dashes, single quotes and periods.</span>
        </fieldset>
        <label>Which SDK are you interested in? Select all that apply.</label>
        <fieldset className='sdk_checkbox_area'>
          {checkedState.map(elem => (
            <div key={elem.id}>
              <button type='button' role='checkbox' aria-checked={elem.checked} onClick={() => handleCheck(elem)} />
              <label>{elem.name}</label>
            </div>
          ))}
          <div>
            <button type='button' role='checkbox' aria-checked={false} />
            <span>I AGREE TO SHARE MY EMAIL ADDRESS WITH YUGA LABS INC. </span>
          </div>
        </fieldset>
        <button>JOIN THE WORLD-BUILDING TEAM</button>
      </form>
    </div>
  )
}

export default Sdk
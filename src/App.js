import React, { useEffect, useState } from 'react';
import './App.css';

import ButtonBase from './components/buttons/base';
import Room from './components/room';
import Message from './components/message';

import { ROOMS } from './data';

const App = () => {
  const [currentPositionRoom, setCurrentPositionRoom] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = ({
    isBack
  }) => {
    const nextRoom = isBack ? currentPositionRoom - 1 :  currentPositionRoom + 1;
    if (nextRoom < 0) {
      setErrorMessage('There is not room under 1 room');
    } else if (nextRoom >= ROOMS.length) {
      setErrorMessage(`There is not room over ${ROOMS.length} room`);
    } else {
      setCurrentPositionRoom(nextRoom);
      setErrorMessage('');
    }
  };

  return (
    <div>
      <h1>Room Fruits</h1>
      <Room
        fruit={ ROOMS[currentPositionRoom] }
        roomNumber={ currentPositionRoom } />
      { errorMessage && (
        <div>
          <Message message={ errorMessage }/>
        </div>
      ) }
      <div>
        <div>
          <ButtonBase
            handleOnClick={ () => handleButtonClick({ isBack: true }) }
            text='Back' />
        </div>
        <div>
          <ButtonBase
            handleOnClick={ () => handleButtonClick({ isBack: false }) }
            text='Next' />
        </div>
      </div>
    </div>
  );
};

export default App;

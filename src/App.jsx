import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typewriter from 'typewriter-effect';
import Loader from './components/Loader/Loader';

function App() {
  const consoleR = useSelector(state => state.consoleR);
  const typeWriterInfo = { ...consoleR };
  delete typeWriterInfo.lastAction;
  return (
    <>
      <Typewriter
        options={{
          strings: JSON.stringify(typeWriterInfo),
          autoStart: true,
          loop: false
        }}
      />
      <Loader />
    </>
  );
}

export default App;

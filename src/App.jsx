import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typewriter from 'typewriter-effect';
import Loader from './components/Loader/Loader';
import Login from './Views/Login/Login';

function App() {
  const consoleR = useSelector(state => state);
  const typeWriterInfo = { ...consoleR };
  delete typeWriterInfo.lastAction;
  const { user } = consoleR;
  return (
    <>
      <Typewriter
        options={{
          strings: JSON.stringify(typeWriterInfo),
          autoStart: true,
          loop: false
        }}
      />
      {!user.id.length ? <Login /> : <Loader />}
    </>
  );
}

export default App;

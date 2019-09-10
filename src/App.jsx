import React from 'react';
import { useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';
import Login from './Views/Login/Login';
import AppShell from './components/AppShell/AppShell';

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
      {!user.id.length ? <Login /> : <AppShell />}
    </>
  );
}

export default App;

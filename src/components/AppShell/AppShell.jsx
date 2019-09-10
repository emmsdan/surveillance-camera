import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import './AppShell.css';
import Views from '../../Views';

const AppShell = () => {
  const [appState, setAppState] = useState({ loading: true });
  function isLoading(time) {
    console.log(time);
    if (time >= 100) {
      setAppState({ loading: false });
    }
  }
  return (
    <div className="AppShell">
      <div>
        {appState.loading && <Loader callback={isLoading} />}
        {!appState.loading && <Views />}
      </div>
    </div>
  );
};

export default AppShell;

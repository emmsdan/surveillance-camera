import React from 'react';
import './App.css';
import Modal from './components/Modal';

const Mentor = () => {
  return <h1>Hellow world</h1>;
};
function App() {
  return (
    <>
      <Modal title="Box Title" content={Mentor()} />
    </>
  );
}

export default App;

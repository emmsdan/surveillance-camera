import React from 'react';
import './App.css';
import Modal from './components/Modal';

const Mentor = () => {
  return <h1>Hellow world</h1>;
};
function App() {
  return (
    <div className="">
      <Modal title="Box Title" content={Mentor()} />
    </div>
  );
}

export default App;

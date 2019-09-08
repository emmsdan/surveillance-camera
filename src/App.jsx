import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import {
  FormInput,
  FormOptions,
  FormButton
} from './components/FormFields/FormFields';

const Mentor = () => {
  return <h1>Hellow world</h1>;
};
function App() {
  const options = [
    {
      att: {
        value: 'm',
        desc: 'Male'
      }
    },
    {
      att: {
        value: 'f',
        desc: 'Female'
      }
    }
  ];
  return (
    <div className="">
      <Modal title="Box Title">
        <Mentor />
        <FormInput id="name" title="First Name" value="none" />
        <FormInput id="name" title="Name" value="none" noLabel="true" />
        <FormButton id="name" title="Name" />
        <FormOptions id="gender" title="Gender" options={options} />
      </Modal>
    </div>
  );
}

export default App;

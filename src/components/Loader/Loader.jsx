import React, { useState } from 'react';
import './Loader.css';

const timer = eve => {
  let percent = 0;
  const Increase = setInterval(() => {
    eve.style.width = percent + '%';
    if (percent >= 100) {
      clearInterval(Increase);
    }
    percent += percent < 50 ? 5 : 2;
  }, 500);
  console.log(eve.style.width);
};
const Loader = ({ width, time = timer }) => {
  return (
    <div className="loader">
      <div className="loading" ref={time}></div>
    </div>
  );
};

export default Loader;

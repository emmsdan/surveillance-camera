import React from 'react';
import './Loader.css';

const timer = (eve, callback) => {
  let percent = 0;
  const Increase = setInterval(() => {
    if (eve) {
      if (percent >= 100) {
        clearInterval(Increase);
        callback(percent);
      }
      eve.style.width = percent + '%';
      percent += percent < 50 ? 10 : 5;
    }
  }, 500);
};
const Loader = ({ width, callback = () => {}, time = timer }) => {
  return (
    <div className="loader">
      <div className="loading" ref={event => time(event, callback)}></div>
    </div>
  );
};

export default Loader;

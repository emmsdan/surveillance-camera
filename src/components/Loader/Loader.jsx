import React from 'react';
import './Loader.css';

const timer = (eve, callback, loadSpeed = 10) => {
  let percent = 0;
  const Increase = setInterval(() => {
    if (eve) {
      if (percent >= 100) {
        clearInterval(Increase);
        callback(percent);
      }
      eve.style.width = percent + '%';
      percent += percent < 60 ? loadSpeed : loadSpeed / 2;
    }
  }, 500);
};
const Loader = ({
  width,
  callback = () => {},
  time = timer,
  loadSpeed = 20
}) => {
  return (
    <div className="loader">
      <div
        className="loading"
        ref={event => time(event, callback, loadSpeed)}
      ></div>
    </div>
  );
};

export default Loader;

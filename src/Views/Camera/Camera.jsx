import React, { useState, useRef, createRef } from 'react';

import './Camera.css';
import Modal from '../../components/Modal/Modal';
// import Modal from "../../components/Modal/Modal";
var windowURL = window.URL || window.webkitURL || window.mozURL || window.msURL;

const startCamera = async () => {
  const videos = [];
  const devices = await navigator.mediaDevices.enumerateDevices();
  for (let device of devices) {
    if (device.kind === 'videoinput') {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        const video = document.createElement('video');
        // Older browsers may not have srcObject
        if ('srcObject' in video) {
          video.srcObject = stream;
        } else {
          // Avoid using this in new browsers, as it is going away.
          video.src = URL.createObjectURL(stream);
        }
        video.play();
        document.querySelector('.singleVideo').appendChild(video);
      } catch (err) {
        console.log(err);

        /* handle the error */
      }
    }
  }
};
const Cameras = () => {
  startCamera();
  const frame = (
    <>
      <Modal title="videos">
        <div className="singleVideo"></div>
      </Modal>
      <div className="cameras"></div>
    </>
  );
  return frame;
};

export default Cameras;

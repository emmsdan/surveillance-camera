import React, { useState, useRef, createRef } from 'react';

import './Camera.css';
import Modal from '../../components/Modal/Modal';
import { createCameras, getCamera } from '../../utils/utils';
const Cameras = () => {
  const [{ camElement, camStream, isClose }, setCamera] = useState({
    isClose: false
  });
  let closed = isClose;
  console.log(closed);
  if (!camStream)
    createCameras('.cameras', '', (video, stream) => {
      closed = true;
      setCamera({ camElement: video, camStream: stream, isClose: true });
    });

  const offset = { left: '20%', top: '10%' };
  const frame = (
    <>
      <Modal title="videos" isClose={isClose ? true : false} offset={offset}>
        <div className="singleVideo" id="showCam101"></div>
      </Modal>
      <div className="cameras"></div>
    </>
  );
  return frame;
};

export default Cameras;

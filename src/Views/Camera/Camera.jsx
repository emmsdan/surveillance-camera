import React, { useState, useRef, createRef } from 'react';

import './Camera.css';
import Modal from '../../components/Modal/Modal';
import { createCameras, getCamera } from '../../utils/utils';
import useModal from '../../components/Modal/useModal';
const Cameras = () => {
  const [cameraSetting, setCamera] = useState({
    isClose: false,
    videoTitle: ''
  });
  let isClose = cameraSetting.isClose;
  if (!cameraSetting.camStream) {
    createCameras('.cameras', '', (video, stream) => {
      setCamera({
        camElement: video,
        camStream: stream,
        videoTitle: stream.device.label
      });
    });
  }
  const offset = { left: '20%', top: '10%', minWidth: '700px' };
  const actions = { ...useModal() };
  const openModal = () => {
    actions.hide();
    getCamera(cameraSetting.camStream.device.deviceId, '#showCam101');
  };
  const frame = (
    <>
      <Modal actions={actions} title={cameraSetting.videoTitle} offset={offset}>
        <div id="showCam101"> </div>
      </Modal>
      <div className="cameras" onClick={openModal}></div>
    </>
  );
  return frame;
};

export default Cameras;

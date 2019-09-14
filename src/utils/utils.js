import { USER_HASH } from './constants';
import { LOGIN_ATTEMPT } from '../redux/Actions';

// import Modal from "../../components/Modal/Modal";
var windowURL = window.URL || window.webkitURL || window.mozURL || window.msURL;

export const shortString = (noCharBy4 = 1) => {
  let charracter = '';
  do {
    charracter += Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    noCharBy4--;
  } while (noCharBy4);
  return charracter;
};
export const uuid = () => {
  return `${shortString(
    2
  )}-${shortString()}-${shortString()}-${shortString()}-${shortString(2)}`;
};

export const setUserUUID = () => {
  if (!localStorage.getItem(USER_HASH)) {
    localStorage.setItem(USER_HASH, uuid());
  }
  return localStorage.getItem(USER_HASH) || 'could not generate secure token';
};
export const removeUserUUID = () => {
  if (localStorage.getItem(USER_HASH)) {
    localStorage.removeItem(USER_HASH);
  }
};
export const getUserUUID = () => {
  return localStorage.getItem(USER_HASH) || '';
};

export const loginAttempt = (attempt = 0) => {
  const attempts = Number(sessionStorage.getItem(LOGIN_ATTEMPT) || 0);
  console.log(attempts);
  sessionStorage.setItem(LOGIN_ATTEMPT, attempts + attempt);
  return attempts + attempt;
};

export const createCameras = async (
  parent,
  className = '',
  callback = (el, str) => {}
) => {
  const videos = [];
  const devices = await navigator.mediaDevices.enumerateDevices();
  for (let device of devices) {
    if (device.kind === 'videoinput') {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        const video = document.createElement('video');
        video.className = className;
        // Older browsers may not have srcObject
        if ('srcObject' in video) {
          video.srcObject = stream;
        } else {
          // Avoid using this in new browsers, as it is going away.
          video.src = URL.createObjectURL(stream);
        }
        console.log(device);
        callback(video, { stream, device });
        video.play();
        document.querySelector(parent).appendChild(video);
      } catch (err) {
        console.log(err);

        /* handle the error */
      }
    }
  }
};
export const getCamera = async (
  cameraOrBustDeviceId,
  parent,
  className = '',
  callback = (el, str) => {}
) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: cameraOrBustDeviceId } }
    });
    const video = document.createElement('video');
    video.className = className;
    if ('srcObject' in video) {
      video.srcObject = stream;
    } else {
      video.src = URL.createObjectURL(stream);
    }
    callback(video, { stream });
    video.play();
    document.querySelector(parent).appendChild(video);
  } catch (err) {
    console.log(err);

    /* handle the error */
  }
};

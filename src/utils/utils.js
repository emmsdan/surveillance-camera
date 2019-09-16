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
      getCamera(device, parent, className, callback);
    }
  }
};
export const getCamera = async (
  device,
  parent,
  className = '',
  callback = (el, str) => {}
) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: device.deviceId } }
    });
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    video.width = '400px';
    video.height = '400px';
    video.className = `${className} hide`;
    if ('srcObject' in video) {
      video.srcObject = stream;
    } else {
      video.src = URL.createObjectURL(stream);
    }
    callback(video, { stream, device });
    video.play();
    console.log(document.querySelector(parent));
    // document.querySelector(parent).appendChild(video);
    document.querySelector(parent).appendChild(canvas);

    video.addEventListener('canplay', () => paintToCanvas(video, canvas, ctx));
  } catch (err) {
    console.log(err);
    /* handle the error */
  }
};

function paintToCanvas(video, canvas, ctx) {
  const width = 433;
  const height = 300;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    ctx.filter = 'contrast(105%) brightness(153%)';

    // mess with them
    // pixels = redEffect(pixels);

    // pixels = rgbSplit(pixels);
    // // ctx.globalAlpha = 0.8;

    // // pixels = greenScreen(pixels);
    // // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

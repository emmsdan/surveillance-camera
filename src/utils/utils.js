import { USER_HASH } from './constants';
import { LOGIN_ATTEMPT } from '../redux/Actions';

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
  return localStorage.getItem(USER_HASH) || setUserUUID();
};

export const loginAttempt = (attempt = 0) => {
  const attempts = Number(sessionStorage.getItem(LOGIN_ATTEMPT) || 0);
  console.log(attempts);
  sessionStorage.setItem(LOGIN_ATTEMPT, attempts + attempt);
  return attempts + attempt;
};

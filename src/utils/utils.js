import { USER_HASH } from './constants';

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
export const getUserUUID = () => {
  return localStorage.getItem(USER_HASH) || setUserUUID();
};

export const INTERFACE = {
  GUI: 'GUI',
  CMD: 'CONSOLE'
};

export const CMD = {
  HELP: 'HELP',
  LOGIN: 'LOGOUT',
  LOGOUT: 'LOGOUT',
  GENERAL: 'GENERAL'
};
export const TEMP_DATABASE = ['emmsdan', 'test', 'help'];

export const LOGIN = 'LOGIN_USER';
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';

export const openConsole = (command = CMD) => {
  return { type: INTERFACE.CMD, command };
};
export const openUI = () => {
  return { type: INTERFACE.GUI };
};

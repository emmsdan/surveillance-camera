import { CMD } from './Actions';
import { initialInterfaceState } from './InterfaceReducer';

export const initialConsoleState = {
  directory: '$ h_ed/',
  lastAction: ''
};

export default (state = initialConsoleState, action) => {
  switch (action.type) {
    case CMD.GENERAL:
      return {
        ...state,
        action: action.payload,
        lastAction: state.action
      };

    default:
      return state;
  }
};

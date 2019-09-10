import { INTERFACE } from './Actions';

export const initialInterfaceState = {
  interface: INTERFACE.GUI
};

export default (state = initialInterfaceState, action) => {
  switch (action.type) {
    case INTERFACE.CMD:
      return { ...state, interface: INTERFACE.CMD };

    default:
      return state;
  }
};

import { INTERFACE } from './Actions';
import { getUserUUID } from '../utils/utils';

export const initialInterfaceState = {
  interface: INTERFACE.GUI,
  user: { id: getUserUUID() }
};

export default (state = initialInterfaceState, action) => {
  switch (action.type) {
    case INTERFACE.CMD:
      return { ...state, interface: INTERFACE.CMD };

    default:
      return state;
  }
};

import {
  getUserUUID,
  setUserUUID,
  removeUserUUID,
  loginAttempt
} from '../utils/utils';
import { LOGIN, LOGIN_ATTEMPT } from './Actions';

export const initialUserState = {
  attempt: 0,
  id: getUserUUID()
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN:
      delete state.attempt;
      return { ...state, id: setUserUUID(), isLogin: true };

    case LOGIN_ATTEMPT:
      removeUserUUID();
      loginAttempt(1);
      return { ...state, user: {}, attempt: state.attempt + 1, isLogin: false };

    default:
      return state;
  }
};

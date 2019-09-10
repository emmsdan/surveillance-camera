import { combineReducers } from 'redux';
import ConsoleReducer from './ConsoleReducer';
import InterfaceReducer from './InterfaceReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  consoleR: ConsoleReducer,
  interfaceR: InterfaceReducer,

  user: UserReducer
});

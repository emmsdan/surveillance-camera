import { combineReducers } from 'redux';
import ConsoleReducer from './ConsoleReducer';
import InterfaceReducer from './InterfaceReducer';

export default combineReducers({
  consoleR: ConsoleReducer,
  interfaceR: InterfaceReducer
});

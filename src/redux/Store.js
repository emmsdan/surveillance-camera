import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import MainReducer from './MainReducer';

const middleware = applyMiddleware(thunkMiddleware);
export default createStore(MainReducer, composeWithDevTools(middleware));

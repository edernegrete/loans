import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import loans from './loans';
const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  loans
});

export default createRootReducer;

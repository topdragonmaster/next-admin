import { combineReducers } from 'redux';
import authReducer from './authReducer'; 
import stationReducer from './stationReducer';
import accountReducer from './accountReducer';
import tradeReducer from './tradeReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  station: stationReducer,
  account: accountReducer,
  trade:tradeReducer,
  transaction: transactionReducer,
});

export default rootReducer;

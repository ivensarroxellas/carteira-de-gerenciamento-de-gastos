import { combineReducers } from 'redux';
import user from './user';
import walllet from './wallet';

const rootReducer = combineReducers({ user, walllet });

export default rootReducer;

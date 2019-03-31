import { combineReducers } from 'redux';
import calcs from './calcsReducer';

const rootReducer = combineReducers({
    calcs,
});

export default rootReducer;
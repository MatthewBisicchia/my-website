import { combineReducers } from 'redux';
import labsReducer from './labs'

const reducers = combineReducers({
    labs: labsReducer,
});

export default reducers;
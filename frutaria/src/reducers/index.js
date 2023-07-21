import { reducers as fruitReducers } from './fruit.reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    fruitReducers
});

export { reducers };
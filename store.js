import { createStore, combineReducers } from 'redux';
import goalsReducer from './reducers/goalsReducer';

const rootReducer = combineReducers({
  goals: goalsReducer,
});

export const configStore = () => {
  return createStore(rootReducer);
}

import { combineReducers } from 'redux';
import phonebookReducer from './phonebookReducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

export default rootReducer;

import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from '../constants/phonebookConstants';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter(item => item.id !== action.payload)],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default phonebookReducer;

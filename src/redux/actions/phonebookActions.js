// import { ADD_CONTACT, DELETE_CONTACT, GET_INITIAL_CONTACTS, SET_FILTER } from '../constants/phonebookConstants';
import { createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('phonebook/addNewContact');
export const deleteContact = createAction('phonebook/deleteContact');
export const setFilter = createAction('phonebook/setFilter');
export const getInitialContacts = createAction('phonebook/getInitialContacts');

// export const addNewContact = data => {
//   return {
//     type: ADD_CONTACT,
//     payload: data,
//   };
// };
// export const deleteContact = id => {
//   return {
//     type: DELETE_CONTACT,
//     payload: id,
//   };
// };
// export const setFilter = value => {
//   return {
//     type: SET_FILTER,
//     payload: value,
//   };
// };
// export const getInitialContacts = data => {
//   return {
//     type: GET_INITIAL_CONTACTS,
//     payload: data,
//   };
// };

import React, { useState, useEffect } from 'react';
import AppWrapper from './AppStyled';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Alert from './alert/Alert';
const initialState = {
  contacts: [],
  filter: '',
};
const App = () => {
  const [state, setState] = useState({ ...initialState });
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setState({ contacts: JSON.parse(contacts) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
    setState(prevState => ({ ...prevState, filter: state.filter }));
  }, [state.filter, state.contacts]);
  const showAlertMessage = message => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setTimeout(() => {
      setAlertMessage('');
    }, 3250);
  };
  // const addPhonebookItem = item => {
  //   const { contacts } = state;
  //   if (contacts.some(element => element.name === item.name)) {
  //     showAlertMessage(`${item.name} is already in contacts`);
  //     return;
  //   }
  //   if (!item.name.length) {
  //     showAlertMessage('Please enter a name');
  //     return;
  //   }
  //   if (!item.number.length) {
  //     showAlertMessage('Please enter a number');
  //     return;
  //   }
  //   setState(prevState => ({ ...prevState, contacts: [...prevState.contacts, item] }));
  // };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleDeleteContact = e => {
    const id = e.target.dataset.id;
    setState(prevState => ({ ...prevState, contacts: state.contacts.filter(item => item.id !== id) }));
    if (state.contacts.filter(item => item.name.toLowerCase().includes(state.filter.toLowerCase())).length < 2) {
      setState(prevState => ({ ...prevState, filter: '' }));
    }
  };
  const { contacts, filter } = state;
  return (
    <AppWrapper>
      <CSSTransition in={showAlert} timeout={250} classNames="my-alert" unmountOnExit>
        <Alert message={alertMessage} />
      </CSSTransition>
      <CSSTransition in={true} appear={true} timeout={500} classNames="my-title" unmountOnExit>
        <h1 className="page-title">Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className="contacts-title">Contacts</h2>
      <CSSTransition in={state.contacts.length > 1} timeout={250} classNames="my-filter" unmountOnExit>
        <Filter filter={filter} />
      </CSSTransition>

      <ContactList contacts={contacts} filter={filter} />
    </AppWrapper>
  );
};

export default App;

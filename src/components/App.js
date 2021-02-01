import React from 'react';
import AppWrapper from './AppStyled';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { connect } from 'react-redux';

const App = ({ contacts }) => {
  return (
    <AppWrapper>
      <CSSTransition in={true} appear={true} timeout={500} classNames="my-title" unmountOnExit>
        <h1 className="page-title">Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className="contacts-title">Contacts</h2>
      <CSSTransition in={contacts.length > 1} timeout={250} classNames="my-filter" unmountOnExit>
        <Filter />
      </CSSTransition>

      <ContactList />
    </AppWrapper>
  );
};
const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts,
  };
};

export default connect(mapStateToProps)(App);

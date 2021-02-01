import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactListItem from './contactListItem/ContactListItem';
import ContactListWrapper from './ContactListStyled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteContact, getInitialContacts } from '../../redux/actions/phonebookActions';

const ContactList = ({ contacts, filter, getInitialContacts }) => {
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      getInitialContacts(JSON.parse(contacts));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <ContactListWrapper>
      <TransitionGroup component="ul" className="list">
        {contacts
          .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
          .map(item => (
            <CSSTransition key={item.id} timeout={250} classNames="my-list-item">
              <ContactListItem item={item} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactListWrapper>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts.filter(item => item.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())),
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => {
      dispatch(deleteContact(id));
    },
    getInitialContacts: data => {
      dispatch(getInitialContacts(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
ContactListItem.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

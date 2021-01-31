import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactListItem from './contactListItem/ContactListItem';
import ContactListWrapper from './ContactListStyled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteContact, setFilter } from '../../redux/actions/phonebookActions';

const ContactList = ({ contacts, filter, onBtnClick }) => {
  return (
    <ContactListWrapper>
      <TransitionGroup component="ul" className="list">
        {contacts
          .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
          .map(item => (
            <CSSTransition key={item.id} timeout={250} classNames="my-list-item">
              <ContactListItem item={item} onBtnClick={onBtnClick} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
ContactListItem.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onBtnClick: PropTypes.func.isRequired,
};
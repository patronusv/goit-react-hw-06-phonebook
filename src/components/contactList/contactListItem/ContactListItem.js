import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact, setFilter } from '../../../redux/actions/phonebookActions';
import ContactLi from './ContactListItemStyled';
const ContactListItem = ({ item, contacts, filter, deleteContact, setFilter }) => {
  const onHandleDelete = e => {
    const id = e.target.dataset.id;

    deleteContact(id);
    console.log('filter', filter);

    if (contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).length < 2) {
      console.log('need to clear filter');
      setFilter('');
    }
  };
  return (
    <ContactLi classname="contact-list-item" key={item.id}>
      <span className="contact-list-name">{item.name}: </span>
      <span className="contact-list-number">{item.number}</span>
      <button className="contact-list-button" type="button" onClick={onHandleDelete} data-id={item.id}>
        Delete contact
      </button>
    </ContactLi>
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
    setFilter: value => {
      dispatch(setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

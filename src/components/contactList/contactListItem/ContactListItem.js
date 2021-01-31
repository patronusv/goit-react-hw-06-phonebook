import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../../redux/actions/phonebookActions';
import ContactLi from './ContactListItemStyled';
const ContactListItem = ({ item, deleteContact }) => {
  const onHandleDelete = e => {
    const id = e.target.dataset.id;

    deleteContact(id);
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

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => {
      dispatch(deleteContact(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ContactListItem);
ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

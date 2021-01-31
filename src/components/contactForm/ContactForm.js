import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { addNewContact, deleteContact, setFilter } from '../../redux/actions/phonebookActions';
import FormWrapper from './ContactFormStyled';
const initialState = {
  name: '',
  number: '',
};
const ContactForm = ({ addNewContact }) => {
  const [state, setState] = useState({ ...initialState });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = { id: uuidv4(), name: state.name, number: state.number };

    addNewContact(user);
    setState({ ...initialState });
  };
  const { name, number } = state;
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name
          <input className="form-input" type="text" name="name" value={name} onChange={handleInputChange} />
        </label>
        <label className="form-label">
          Number
          <input className="form-input" type="text" name="number" value={number} onChange={handleInputChange} />
        </label>
        <button className="form-button" type="submit">
          Add contact
        </button>
      </form>
    </FormWrapper>
  );
};

const mapStateToProps = state => {
  return {
    alert: state.alert,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNewContact: camp => {
      dispatch(addNewContact(camp));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

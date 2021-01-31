import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions/phonebookActions';
import FilterWrapper from './FilterStyled';
const Filter = ({ setFilter, filter }) => {
  const onHandleChange = e => {
    console.log(e.target);
    const { value } = e.target;
    console.log(value);
    setFilter(value);
  };
  return (
    <FilterWrapper>
      <label className="filter-label">
        Search by name
        <input className="filter-input" type="text" name="filter" value={filter} onChange={onHandleChange} />
      </label>
    </FilterWrapper>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => {
      dispatch(setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

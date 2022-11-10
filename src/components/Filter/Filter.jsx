import React from 'react';
import PropTypes from 'prop-types';

import {
  FilterLabelContainer,
  FilterLabel,
  FilterInput,
} from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterLabelContainer>
    <FilterLabel>Find contacts by name</FilterLabel>
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterLabelContainer>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

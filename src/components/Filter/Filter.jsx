import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  const onBlur = ({ target: { value } }) => (value = '');
  const onChange = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <>
      <FilterLabel htmlFor="find">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="find"
        id="find"
        value={filterValue}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

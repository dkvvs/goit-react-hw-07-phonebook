import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/phonebook-selectors';
import * as actions from 'redux/phonebook-actions';
import s from './filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <>
      <p className={s.search}>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </>
  );
}

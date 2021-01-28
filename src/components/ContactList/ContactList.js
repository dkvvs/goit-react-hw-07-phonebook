import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/phonebook-operations';
import { getVisibleContact } from 'redux/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  const contactRemove = id => dispatch(actions.deleteContact(id));

  useEffect(() => {
    const fetchContacts = () => dispatch(actions.fetchContacts());
    fetchContacts();
  }, [dispatch]);

  const onRemove = id => contactRemove(id);

  if (!contacts.length) return null;

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          {name} : {number}
          <button className={s.button} onClick={() => onRemove(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

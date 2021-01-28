import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const endpoints = {
  contacts: {
    base: '/contacts',
    byId: id => `/contacts/${id}`,
  },
};

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get(endpoints.contacts.base)
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = nameContact => dispatch => {
  dispatch(addRequest());

  axios
    .post(endpoints.contacts.base, nameContact)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteRequest());

  axios
    .delete(endpoints.contacts.byId(id))
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error)));
};

const actions = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default actions;

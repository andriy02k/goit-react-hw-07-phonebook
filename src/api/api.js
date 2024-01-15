import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://65a319a5a54d8e805ed36904.mockapi.io'
});

export const getContacts = async () => {
  const { data } = await api.get(`/contacts/contacts`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await api.post(`/contacts/contacts`, contact);
  return data;
};

export const dellContacts = async id => {
  const { data } = await api.delete(`/contacts/contacts/${id}`);
  return data;
};

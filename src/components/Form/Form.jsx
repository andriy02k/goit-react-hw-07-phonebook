import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from '../../store/thunks';
import { contactsSelector } from '../../store/selectors';
import css from './Form.module.css'

const Form = () => {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeNumber = ({ target: { value } }) => setNumber(value); 

  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some(el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContactsThunk({ name, number }));
      setName('');
      setNumber('');
    }
  }
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" value={name} onChange={handleChangeName} required />
      </label>
      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" value={number} onChange={handleChangeNumber} required />
      </label>
      <button className={css.btn} type="submit">Add contact</button>
    </form>
  )
}

export default Form
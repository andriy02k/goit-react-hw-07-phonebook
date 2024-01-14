import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from '../../store/sliceContacts';
// import { nanoid } from 'nanoid'
import css from './Form.module.css'

const Form = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeNumber = ({ target: { value } }) => setNumber(value); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some(el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContactAction({ name, number }));
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
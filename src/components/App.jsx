import React from 'react'
import Form from './Form/Form'
import List from './List/List'
import Filter from './Filter/Filter'

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>            
      <Filter />
      <List />
    </>
  )
}

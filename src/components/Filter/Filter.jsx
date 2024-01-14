import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../store/sliceFilter';
import { Filters } from './Filter.styled'

const Filter = () => {
  const {filter} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filtered = ({ target: { value } }) => {
    dispatch(addFilter(value));
   }
  return (
    <Filters>
        Filter contacts by name
          <input type="text" value={filter} onChange={filtered} />
    </Filters>
  )
}

export default Filter

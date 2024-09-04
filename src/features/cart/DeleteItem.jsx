import React from 'react'
import Button from '../../Ui/Button'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'

function DeleteItem({pizzaId}) {
  const dispatch=useDispatch()
  function Delete(){
    dispatch(deleteItem(pizzaId))
  }
  return (
    <Button type="small" onClick={Delete}>Delete</Button>
  )
}

export default DeleteItem
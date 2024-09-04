import React from 'react'
import Button from '../../Ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

export default function UpdateItemQuantity({pizzaId,currentQuantity}) {
 const dispatch = useDispatch()
 function Add (){
  dispatch( increaseItemQuantity(pizzaId))
 }
 function Subtract (){
  dispatch( decreaseItemQuantity(pizzaId))
 }

  return (
    <div className='flex items-center gap-2 md:gap-3'>
      <Button type="round" onClick={Subtract}>-</Button>
      <span  className='text-sm font-medium'>{currentQuantity}</span>
      <Button type="round" onClick={Add}>+</Button>
    </div>
  )
}

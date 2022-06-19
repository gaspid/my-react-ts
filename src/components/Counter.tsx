import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { decrement, increment } from '../redux/todo'

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      {count}
      <button onClick={() => dispatch(increment())}>Count +</button>
      <button onClick={() => dispatch(decrement())}>Count -</button>
    </div>
  )
}

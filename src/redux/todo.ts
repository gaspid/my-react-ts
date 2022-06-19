import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface count {
  count: number
}

const initialState: count = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = [{}]

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addPlayerOne: (state, action) => {
      console.log(initialState)
      console.log(action.payload)
      state[0].score = action.payload
      console.log(state[0].score)
    },
  },
})

export const { addPlayerOne } = scoreSlice.actions
export default scoreSlice.reducer

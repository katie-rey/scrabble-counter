import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    // scoreOne: 0,
    // scoreTwo: 0,
  },
]

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore: (state, action) => {
      console.log(initialState)
      console.log(action.payload)
      state[0].score = action.payload
      console.log(state[0].score)
    },
  },
})

export const { addScore } = scoreSlice.actions
export default scoreSlice.reducer

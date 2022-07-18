import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScores: (state, action) => {
      console.log(initialState)
      console.log(action.payload)
      state.score = action.payload
      console.log(state.score)
    },
  },
})

export const { addScores } = scoreSlice.actions
export default scoreSlice.reducer

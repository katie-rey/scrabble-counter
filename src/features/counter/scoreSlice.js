import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: {
    scoreOne: 0,
    scoreTwo: 0,
  },
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore: (state, action) => {
      console.log(action.payload)
      state.score = action.payload
      console.log(state.score)
    },
  },
})

export const { addScore } = scoreSlice.actions
export default scoreSlice.reducer

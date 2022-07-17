import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: {
    playerOne: '',
    playerTwo: '',
  },
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload)
      state.players = action.payload
      console.log(state)
    },
  },
})

export const { addPlayers } = playersSlice.actions
export default playersSlice.reducer

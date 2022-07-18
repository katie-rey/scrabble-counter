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
      console.log(action.payload)
      state.players = action.payload
      console.log(state)
    },
  },
})

export const { addPlayers } = playersSlice.actions
export default playersSlice.reducer

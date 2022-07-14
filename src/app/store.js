import { configureStore } from '@reduxjs/toolkit'
import playerReducer from '../features/counter/players'

export const store = configureStore({
  reducer: {
    players: playerReducer,
  },
})

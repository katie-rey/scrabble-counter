import { configureStore } from '@reduxjs/toolkit'
import playerReducer from '../features/counter/playersSlice'

export const store = configureStore({
  reducer: {
    players: playerReducer,
  },
})

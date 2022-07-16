import { configureStore } from '@reduxjs/toolkit'
import playerReducer from '../features/counter/playersSlice'
import scoreReducer from '../features/counter/scoreSlice'

export const store = configureStore({
  reducer: {
    players: playerReducer,
    score: scoreReducer,
  },
})

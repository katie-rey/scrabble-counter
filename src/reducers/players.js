import { ADD_PLAYERS } from '../actions/index'

const INITIAL_STATE = {}

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      console.log(action.players)
      return action.players

    default:
      return state
  }
}

export default playerReducer

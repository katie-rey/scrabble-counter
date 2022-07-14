// set player state

export const ADD_PLAYERS = 'ADD_PLAYERS'

export function addPlayers(players) {
  return {
    type: ADD_PLAYERS,
    payload: players,
  }
}

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { addPlayers } from '../actions/index'
import { addPlayers } from '../features/counter/playersSlice'
import Form from './Form'

function PlayerForm() {
  // const [playerOne, setPlayerOne] = useState('')
  // const [playerTwo, setPlayerTwo] = useState('')
  const [players, setPlayers] = useState({
    playerOne: '',
    playerTwo: '',
  })

  const playersState = useSelector((state) => state.players)
  const dispatch = useDispatch()

  useEffect(() => {}, [])

  function handleChange(e) {
    setPlayers({
      ...players,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addPlayers(players))

    e.target.reset()
  }

  console.log(playersState)

  return (
    <>
      <div className="player-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              // for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Player One
            </label>
            <input
              type="text"
              id="first-name"
              name="playerOne"
              value={playersState.playerOne}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
            ></input>
          </div>
          <div className="mb-6">
            <label
              // for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Player Two
            </label>
            <input
              type="text"
              id="first-name"
              name="playerTwo"
              value={playersState.playerTwo}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
            ></input>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Form state={players} />
      {/* {console.log(players)} */}
    </>
  )
}

export default PlayerForm

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addScore } from '../features/counter/scoreSlice'

import '../App.css'
import 'flowbite'

function Form() {
  const [score, setScore] = useState([
    // {
    //   scoreOne: 0,
    //   scoreTwo: 0,
    // },
  ])

  const scoreState = useSelector((state) => state.score)

  const dispatch = useDispatch()

  useEffect(() => {}, [])

  function handleChange(e) {
    setScore({
      ...score,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addScore(score))

    console.log(score)

    e.target.reset()
  }

  // console.log(playersState.players.playerOne)
  // console.log(playersState.players.playerTwo)

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="counter-container">
          <div className="score-container">
            <div className="mb-6">
              <label
                // for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                P1 Score
              </label>
              <input
                type="text"
                id="playerOne-score"
                name="scoreOne"
                onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="score"
              ></input>
            </div>
            <div className="mb-6">
              <label
                // for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                P2 Score
              </label>
              <input
                type="text"
                id="playerTwo-score"
                name="scoreTwo"
                onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="score"
              ></input>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form

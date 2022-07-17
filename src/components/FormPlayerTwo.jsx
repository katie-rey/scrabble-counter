import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addScore } from '../features/counter/scoreSlice'
import data from '../data.json'

import '../App.css'
import 'flowbite'
import Scoreboard from './Scoreboard'

function Form() {
  const [userInput, setUserInput] = useState()
  // const [scoreList, setScoreList] = useState(data)
  // const [totalScore, setTotalScore] = useState(data)
  // const scoreState = useSelector((state) => state.score)
  // const dispatch = useDispatch()
  const [toDoList, setToDoList] = useState([12, 22])

  console.log(userInput)

  useEffect(() => {}, [])

  function handleChange(e) {
    setUserInput(e.target.value)
  }

  // console.log(scoreList)

  // const addScore = text => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);
  // };

  // const newTotalScore = []
  // newTotalScore.push(score)

  function handleSubmit(e) {
    e.preventDefault()
    addScore(userInput)
    // setUserInput('')
    // dispatch(addScore(score))
    // addScoreList(score)
    // setTotalScore(score)
    // console.log(totalScore)

    // const newScore = score
    // newTotalScore.push(newScore)
    e.target.reset()
    // console.log(newTotalScore)
  }

  function addScore(userInput) {
    console.log(userInput)
    console.log(toDoList)
    let copy = [...toDoList]
    console.log(copy)
    copy.push(userInput)
    setToDoList(copy)
    console.log(toDoList)
  }
  // console.log(newTotalScore)
  // console.log(scoreState)

  // const totalPlayerOne = .concat(totalScore)

  // console.log(totalPlayerOne)

  // function addScoreList(text) {
  //   const playerOneScore = []
  //   play
  //   setScore(newScore)
  // }

  // console.log(score)

  // console.log(playersState.players.playerOne)
  // console.log(playersState.players.playerTwo)

  console.log(toDoList)

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
                // value={score}
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
      {/* <Scoreboard /> */}
    </div>
  )
}

export default Form

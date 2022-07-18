import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addScores } from '../features/counter/scoreSlice'

import '../App.css'
import 'flowbite'
import Scoreboard from './Scoreboard'

const initialValues = {
  playerOne: '',
  playerTwo: '',
}

function Form() {
  const [values, setValues] = useState(initialValues)
  const [valuesList, setValuesList] = useState([])

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    // add form validation error message
    e.preventDefault()

    addScore(values)

    e.target.reset()
  }

  function addScore(values) {
    let copy = [...valuesList]
    copy = [...copy, { values }]
    setValuesList(copy)
    console.log(copy)
    setValues(initialValues)
    console.log(valuesList)
    dispatch(addScores(copy))
  }

  return (
    <div className="form-container">
      <form className="ml-40" onSubmit={handleSubmit}>
        <div className="counter-container">
          <div className="score-container">
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  P1 Score
                </label>
                <input
                  type="text"
                  id="playerOne-score"
                  name="playerOne"
                  value={values.playerOne}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="score"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  P1 Score
                </label>
                <input
                  type="text"
                  id="playerOne-score"
                  name="playerTwo"
                  value={values.playerTwo}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="score"
                ></input>
              </div>
              <div clasName="button">
                <button
                  type="submit"
                  className=" mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form

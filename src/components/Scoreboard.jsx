import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Scoreboard({ toDoList }) {
  const playersState = useSelector((state) => state.players)
  const scoreState = useSelector((state) => state.score)

  useEffect(() => {}, [])

  console.log(scoreState.score)
  const scoreArray = scoreState.score

  let playerOneTotal = 0
  scoreArray?.map((item) => {
    return (playerOneTotal += parseInt(item.values.playerOne))
  })
  console.log(playerOneTotal)

  let playerTwoTotal = 0
  scoreArray?.map((item) => {
    return (playerTwoTotal += parseInt(item.values.playerTwo))
  })
  console.log(playerTwoTotal)

  return (
    <div className="scoreboard-container">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Turn
              </th>
              <th scope="col" className="py-3 px-6">
                {playersState.players.playerOne}
              </th>
              <th scope="col" className="py-3 px-6">
                {playersState.players.playerTwo}
              </th>

              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {scoreArray?.map((item, index) => {
              return (
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="py-4 px-6">{item.values.playerOne}</td>
                  <td className="py-4 px-6">{item.values.playerTwo}</td>

                  <td className="py-4 px-6 text-right">
                    {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a> */}
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Total:
            </th>
            <td className="py-4 px-6">{playerOneTotal}</td>
            <td className="py-4 px-6">{playerTwoTotal}</td>

            <td className="py-4 px-6 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              ></a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Scoreboard

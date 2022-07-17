import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { APIgetScore } from '../apis/score'

function Scoreboard({ toDoList }) {
  // const [score, setScore] = useState([])

  const playersState = useSelector((state) => state.players)
  const playerOneListState = useSelector((state) => state.score)

  // const dispatch = useDispatch()

  useEffect(() => {
    // APIgetScore().then((res) => {
    //   console.log(res)
    //   setScore(res)
    // })
  }, [])

  let scoreArray = [12, 24, 30, 40, 50, 60, 70, 80]

  // console.log(score)

  // console.log(scoreAPI)

  console.log(playerOneListState)

  return (
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
                <td className="py-4 px-6">12</td>
                <td className="py-4 px-6">12</td>

                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Scoreboard

// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   2
// </th>
// <td class="py-4 px-6">White</td>
// <td class="py-4 px-6">Laptop PC</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   3
// </th>
// <td class="py-4 px-6">Black</td>
// <td class="py-4 px-6">Accessories</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   4
// </th>
// <td class="py-4 px-6">Gray</td>
// <td class="py-4 px-6">Phone</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   5
// </th>
// <td class="py-4 px-6">Red</td>
// <td class="py-4 px-6">Wearables</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   6
// </th>
// <td class="py-4 px-6">White</td>
// <td class="py-4 px-6">Laptop PC</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   7
// </th>
// <td class="py-4 px-6">Black</td>
// <td class="py-4 px-6">Accessories</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   8
// </th>
// <td class="py-4 px-6">Gray</td>
// <td class="py-4 px-6">Phone</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   9
// </th>
// <td class="py-4 px-6">Red</td>
// <td class="py-4 px-6">Wearables</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   10
// </th>
// <td class="py-4 px-6">White</td>
// <td class="py-4 px-6">Laptop PC</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   11
// </th>
// <td class="py-4 px-6">Black</td>
// <td class="py-4 px-6">Accessories</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   12
// </th>
// <td class="py-4 px-6">Gray</td>
// <td class="py-4 px-6">Phone</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   13
// </th>
// <td class="py-4 px-6">Red</td>
// <td class="py-4 px-6">Wearables</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   14
// </th>
// <td class="py-4 px-6">White</td>
// <td class="py-4 px-6">Laptop PC</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   15
// </th>
// <td class="py-4 px-6">Black</td>
// <td class="py-4 px-6">Accessories</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   16
// </th>
// <td class="py-4 px-6">Gray</td>
// <td class="py-4 px-6">Phone</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>
// <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
// <th
//   scope="row"
//   class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
// >
//   17
// </th>
// <td class="py-4 px-6">Red</td>
// <td class="py-4 px-6">Wearables</td>

// <td class="py-4 px-6 text-right">
//   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//     Edit
//   </a>
// </td>
// </tr>

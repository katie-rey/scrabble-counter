import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../App.css'
import 'flowbite'

function Form() {
 

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(listRequested())
    // setIsLoading(false)
  }, [])

  
  function handleDelete(event, item) {
    event.preventDefault()
    // dispatch(deleteItem(item))
    // dispatch(listRequested())
  }

  function handleAdd(e, item) {
    // e.preventDefault
    // dispatch(addToList(item))
  }

  return (
    <div className="form-container">
      <div className="counter-container">
        <div className="score-container">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Score 1
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
            ></input>
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Score 2
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form

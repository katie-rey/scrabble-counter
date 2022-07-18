import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'flowbite'
import Form from './components/Form'
import Scoreboard from './components/Scoreboard'
import PlayerForm from './components/PlayerForm'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <PlayerForm />
        <Form />
        <Scoreboard />
      </div>
    </>
  )
}

export default App

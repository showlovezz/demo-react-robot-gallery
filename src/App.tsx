import React from 'react'
import './App.css'

import robots from './mockData/robots.json'
import Robot from './components/Robot'

const App = () => {
  return (
    <ul>
      {robots.map((robot) => {
        return <Robot id={robot.id} name={robot.name} email={robot.email} />
      })}
    </ul>
  )
}

export default App

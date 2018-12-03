import React from 'react'
import { render } from 'react-dom'

const SingleRobot = (robot) => (
  <div className="singleRobot">
    <img src={`https://robohash.org/${robot.name}`} />
    <p>{robot.name}</p>
  </div>
)

const AllRobots = (robots = []) => (
  <div>
    {robots.map(robot => (
      <SingleRobot key={robot.name} robot={robot} />
    ))}
  </div>
)

const App = () => (
  <div>
    <h1>Here are the robots:</h1>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)

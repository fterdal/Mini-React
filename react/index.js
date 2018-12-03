import React from 'react'
import { render } from 'react-dom'

const SingleRobot = ({robot}) => {
  console.log('SINGLE ROBOT', robot)
  return (
    <div className="singleRobot">
      <img src={`https://robohash.org/${robot.name}?size=150x150`} />
      <p>{robot.name}</p>
    </div>
  )
}

const AllRobots = ({ robots }) => {
  console.log('ROBOTS', robots)
  return (
    <div className="allRobots">
      {robots.map(robot => (
        <SingleRobot key={robot.name} robot={robot} />
      ))}
    </div>
  )
}

const App = () => {
  const robots = [
    { name: 'finn' },
    { name: 'priti' },
    { name: 'collin' },
    { name: 'ben' },
  ]
  return (
    <div>
      <h1>Here are the robots:</h1>
      <AllRobots robots={robots} />
    </div>
  )
}

render(
  <App />,
  document.getElementById('app')
)

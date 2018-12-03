import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { store, setRobots, removeRobot } from './store'

const SingleRobot = ({ robot, deleteRobot }) => {
  return (
    <div onClick={() => deleteRobot(robot.name)} className="singleRobot">
      <img src={`https://robohash.org/${robot.name}?size=150x150`} />
      <p>{robot.name}</p>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRobot: (name) => dispatch(removeRobot(name))
  }
}

const ConnectedSingleRobot = connect(null, mapDispatchToProps)(SingleRobot)

const AllRobots = (props) => {
  console.log('props', props)
  const  { robots, setRobotsFree } = props
  return (
    <div className="allRobots">
      <button type="button" onClick={setRobotsFree}>SET THE ROBOTS FREE!</button>
      {robots.map(robot => (
        <ConnectedSingleRobot key={robot.name} robot={robot} />
      ))}
    </div>
  )
}

const mapState = (store) => {
  console.log('store', store)
  return {
    robots: store.robots,
    greeting: 'HELLO FROM THE REDUX STORE!!!'
  }
}
const robots = [
  { name: 'finn' },
  { name: 'priti' },
  { name: 'collin' },
  { name: 'ben' },
]
const mapDispatch = (dispatch) => {
  return {
    setRobotsFree: () => {
      console.log('SET ROBOTS FREE IS BEING CALLED')
      dispatch(setRobots(robots))
    }
  }
}
const ConnectedAllRobots = connect(mapState, mapDispatch)(AllRobots)

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Here are the robots:</h1>
        <ConnectedAllRobots />
      </div>
    </Provider>
  )
}

render(
  <App />,
  document.getElementById('app')
)

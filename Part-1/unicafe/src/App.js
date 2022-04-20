import { useState } from 'react'
//Made & Submitted by Ayushman Tripathi
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   return (
    <div>
      <h1>Provide Feedback</h1>
      <Button  handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text} {props.value}</td>
      </tr>
    </>
  )
}

const Button = (props) => {
  return (
    <button type="button" class="btn btn-warning" onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
          <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          <StatisticLine text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + "%"} />
        </tbody>
      </table>
    </>
  )
}


export default App
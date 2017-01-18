import React, { PropTypes } from 'react'

const Counter = ({ increment, incrementIfOdd, incrementAsync, decrement, counter, toggleCalendar }) => (
  <div>
    Clicked: {counter} times
    {' '}
    <button onClick={increment}>+</button>
    {' '}
    <button onClick={decrement}>-</button>
    {' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
    <button onClick={() => toggleCalendar()}>Open calendar!</button>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  toggleCalendar: PropTypes.func.isRequired
}

export default Counter

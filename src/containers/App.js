import React, { PropTypes } from 'react'
import Calendar from '../components/Calendar'
import Counter from '../components/Counter'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

const App = ({
    isCalendarOpen,
    increment,
    incrementIfOdd,
    incrementAsync,
    decrement,
    counter,
    toggleCalendar,
}) => (
    <div>
        <Counter {...{ increment, incrementIfOdd, incrementAsync, decrement, counter, toggleCalendar }}/>
        <Calendar isOpen={isCalendarOpen} toggleCalendar={toggleCalendar}/>
    </div>
)

const mapStateToProps = (state) => ({
  counter: state.counter,
  isCalendarOpen: state.calendarOpen
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

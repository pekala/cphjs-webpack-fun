import React, { PropTypes } from 'react'
import componentProxy from './Proxy';
import Counter from '../components/Counter'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Calendar = componentProxy(() => import('../components/Calendar'));

import {
  increment, incrementIfOdd, incrementAsync, decrement, toggleCalendar
} from '../actions'

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
        { isCalendarOpen && <Calendar isOpen={isCalendarOpen} toggleCalendar={toggleCalendar}/> }
    </div>
)

const mapStateToProps = (state) => ({
  counter: state.counter,
  isCalendarOpen: state.calendarOpen
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, incrementIfOdd, incrementAsync, decrement, toggleCalendar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

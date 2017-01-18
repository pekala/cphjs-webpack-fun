import { combineReducers } from 'redux'
import counter from './counter'
import calendarOpen from './calendarOpen'

const rootReducer = combineReducers({
  counter,
  calendarOpen,
})

export default rootReducer

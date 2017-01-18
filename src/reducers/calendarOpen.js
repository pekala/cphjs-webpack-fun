import { TOGGLE_CALENDAR } from '../actions'

const calendarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CALENDAR:
      return !state
    default:
      return state
  }
}

export default calendarOpen

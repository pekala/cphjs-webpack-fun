export const SET_COUNTER = 'SET_COUNTER'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const TOGGLE_CALENDAR = 'TOGGLE_CALENDAR'
export const DUMMY = 'DUMMY'

export const set = (value) => ({
  type: SET_COUNTER,
  payload: value
})

export const increment = () => ({
  type: INCREMENT_COUNTER
})

export const decrement = () => ({
  type: DECREMENT_COUNTER
})

export const toggleCalendar = () => ({
  type: TOGGLE_CALENDAR
})

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState()

  if (counter % 2 === 0) {
    return
  }

  dispatch(increment())
}

export const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, delay)
}

export const dummyAction = () => ({
  type: DUMMY,
  payload: `
    Lorem ipsum CPHJS dolor sit amet, consectetur adipisicing elit.
    Nemo quisquam neque deleniti ipsum eius pariatur esse dolores,
    nihil at quia fugiat adipisci consequuntur minima maiores qui
    laboriosam quaerat ipsa dicta! Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Eos ullam possimus quasi
    dolore error, odio voluptatem nobis voluptate voluptatibus minus,
    molestias sapiente omnis maiores commodi, eum dignissimos nam
    laboriosam soluta!`,
})

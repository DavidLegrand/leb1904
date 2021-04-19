const initialState = 0
// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    default:
      return state
  }
}

export default counterReducer
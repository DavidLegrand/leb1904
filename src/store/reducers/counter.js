const initialState = {
  loading: false,
  error: null,
  value: 0
}
// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT/SUCCESS':
      return { ...state, loading: false, error: null, value: state.value + action.payload }
    case 'COUNTER/INCREMENT/FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'COUNTER/INCREMENT/STARTED':
      return { ...state, loading: true, error: null }
    default:
      return state
  }
}

export default counterReducer
const initialState = {
  loading: false,
  error: null,
  value: {}
}

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/LOGIN/SUCCESS':
      return { ...state, loading: false, error: null, value: action.payload }
    case 'USER/LOGIN/FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'USER/LOGIN/STARTED':
      return { ...state, loading: true, error: null }
    default:
      return state
  }
}

export default userReducer


const initialState = {
  loading: false,
  error: null,

  logged: false,
  login: null

}

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'USER/REGISTER/SUCCESS':
      return { ...state, loading: false, error: null, ...action.payload }
    case 'USER/REGISTER/FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'USER/REGISTER/STARTED':
      return { ...state, loading: true, error: null }

    case 'USER/LOGIN/SUCCESS':
      return { ...state, loading: false, error: null, ...action.payload }
    case 'USER/LOGIN/FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'USER/LOGIN/STARTED':
      return { ...state, loading: true, error: null }

    case 'USER/LOGOUT/SUCCESS':
      return { loading: false, error: null, logged: false }
    case 'USER/LOGOUT/FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'USER/LOGOUT/STARTED':
      return { ...state, loading: true, error: null }

    default:
      return state
  }
}

export default userReducer


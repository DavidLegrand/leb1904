const initialState = {
  login: '',
  email: ''
}

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, login: action.payload.login, email: action.payload.email }
    default:
      return state
  }
}

export default userReducer
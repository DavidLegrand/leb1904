import { v4 } from 'uuid'

// Action creator
export const loginSuccess = (value = {}) => ({ type: "USER/LOGIN/SUCCESS", payload: value })
export const loginFailure = (error) => ({ type: "USER/LOGIN/FAILURE", payload: error })
export const loginStarted = () => ({ type: "USER/LOGIN/STARTED" })


export const loginUser = (value) => {
  return async (dispatch, getState) => {
    dispatch(loginStarted())
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/" + value)
      if (!response.ok)
        throw new Error("User not found")
      const user = await response.json()
      dispatch(loginSuccess(user))
    } catch (error) {
      dispatch(loginFailure(error.message))
    }
  }
}

// Action creator
export const registerSuccess = (value = {}) => ({ type: "USER/REGISTER/SUCCESS", payload: value })
export const registerFailure = (error) => ({ type: "USER/REGISTER/FAILURE", payload: error })
export const registerStarted = () => ({ type: "USER/REGISTER/STARTED" })

// Thunk
export const registerUser = (registerFormValues) => {
  return async (dispatch, getState) => {
    dispatch(registerStarted())
    try {
      // const response = await fetch("https://jsonplaceholder.typicode.com/users/" + value)
      // if (!response.ok)
      //   throw new Error("User not found")
      // const user = await response.json()

      setTimeout(() => {
        const user = { ...registerFormValues, id: v4(), logged: true }
        dispatch(registerSuccess(user))
      }, 500)
    } catch (error) {
      dispatch(registerFailure(error.message))
    }
  }
}



// Action creator
export const logoutSuccess = () => ({ type: "USER/LOGOUT/SUCCESS" })
export const logoutFailure = (error) => ({ type: "USER/LOGOUT/FAILURE", payload: error })
export const logoutStarted = () => ({ type: "USER/LOGOUT/STARTED" })

// Thunk
export const logoutUser = () => {
  return async (dispatch, getState) => {
    dispatch(logoutStarted())
    try {
      dispatch(logoutSuccess())
    } catch (error) {
      dispatch(logoutFailure(error.message))
    }
  }
}
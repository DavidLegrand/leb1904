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
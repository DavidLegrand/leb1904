// Action creator
export const incrementSuccess = (value = 1) => ({ type: "COUNTER/INCREMENT/SUCCESS", payload: value })
export const incrementFailure = (error) => ({ type: "COUNTER/INCREMENT/FAILURE", payload: error })
export const incrementStarted = () => ({ type: "COUNTER/INCREMENT/STARTED" })


export const asyncIncrement = (value = 1) => {
  return (dispatch, getState, value) => {
    dispatch(incrementStarted())
    try {
      // Appel API FETCH ...
      //throw new Error("Cannot connect to DB")
      setTimeout(() => { dispatch(incrementSuccess(value)) }, 1000)
    } catch (error) {
      dispatch(incrementFailure(error.message))
    }
  }
}
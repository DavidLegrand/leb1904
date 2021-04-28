import { v4 } from 'uuid'

// Action creator
export const createSuccess = (value = {}) => ({ type: "CONVERSATION/CREATE/SUCCESS", payload: value })
export const createFailure = (error) => ({ type: "CONVERSATION/CREATE/FAILURE", payload: error })
export const createStarted = () => ({ type: "CONVERSATION/CREATE/STARTED" })

export const createConversation = (value) => {
  return async (dispatch, getState) => {
    dispatch(createStarted())
    try {
      dispatch(createSuccess(value))
    } catch (error) {
      dispatch(createFailure(error.message))
    }
  }
}

// Action creator
export const newMessageSuccess = (value = {}) => ({ type: "CONVERSATION/NEWMESSAGE/SUCCESS", payload: value })
export const newMessageFailure = (error) => ({ type: "CONVERSATION/NEWMESSAGE/FAILURE", payload: error })
export const newMessageStarted = () => ({ type: "CONVERSATION/NEWMESSAGE/STARTED" })

export const newMessageConversation = (value) => {
  return async (dispatch, getState) => {
    dispatch(newMessageStarted())
    try {
      dispatch(newMessageSuccess(value))
    } catch (error) {
      dispatch(newMessageFailure(error.message))
    }
  }
}


// Action creator
export const selectSuccess = (value = {}) => ({ type: "CONVERSATION/SELECT/SUCCESS", payload: value })
export const selectFailure = (error) => ({ type: "CONVERSATION/SELECT/FAILURE", payload: error })
export const selectStarted = () => ({ type: "CONVERSATION/SELECT/STARTED" })

export const selectConversation = (value) => {
  return async (dispatch, getState) => {
    dispatch(selectStarted())
    try {
      dispatch(selectSuccess(value))
    } catch (error) {
      dispatch(selectFailure(error.message))
    }
  }
}
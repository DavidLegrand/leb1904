const initialState = {
  loading: false,
  error: null,
  list: [
    {
      id: null,
      participants: [],
      messages: []
    }
  ]
}


const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default conversationReducer
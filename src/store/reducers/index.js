import { combineReducers } from 'redux'

import counterReducer from 'store/reducers/counter'
import userReducer from 'store/reducers/user'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})

export default rootReducer
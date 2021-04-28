import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'store/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


// Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)
export default store
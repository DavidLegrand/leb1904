import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'store/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const monMiddleWare = store => next => action => {
  console.log("Store avant action : ", store.getState());
  console.log("Action dispatchée : ", action);
  return next(action)
}


// Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(monMiddleWare, logger, thunk)
  )
)
export default store
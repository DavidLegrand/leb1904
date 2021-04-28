import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
//import rootReducer from 'store/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'

const persistConfig = {
  key: 'user',
  storage,
}

//const persistedReducer = persistReducer(persistConfig, rootReducer)

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer)
})

// Store
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)

export const persistor = persistStore(store)
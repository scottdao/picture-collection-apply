import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga' //引入saga;
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware() // 创建了一个saga中间件实例
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const middlewares = [
  sagaMiddleware
  // thunkMiddleware
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)
export default store 

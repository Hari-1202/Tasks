import { MiddlewareArray, configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'
// import TaskReducer from './reducers/taskReducer'
// import { 
//     listReducer, 
//     objectReducer,
// } from "@wecreatesoftware/redux-higher-order-reducers"
// import createSagaMiddleware from 'redux-saga'
import taskReducer from './reducers/taskReducer'
import userReducer from './reducers/userReducer'

// const sagMiddleWare = createSagaMiddleware()
// const rootReducer = combineReducers({
//     taskReducer : listReducer({reducerName: 'taskReducer'}),
//     userReducer: objectReducer({reducerName: 'userReducer'})
// })
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: [sagMiddleWare],
//     devTools : true
// })

export const store = configureStore({
  reducer: {
    taskReducer: taskReducer,
    userReducer: userReducer
  },
})



export default store
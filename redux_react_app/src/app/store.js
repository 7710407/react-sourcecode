import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  currentUserReducer,
  inialCurrentUser,
} from "../features/currentUser/currentUserSlice";
import { initialTodos, todosReducer } from "../features/todos/todosSlice";
import thunk from "redux-thunk"

// function logger() { 
//   return function (next) { 
//     return function (action) { 
//       console.log("ok")
//       next(action)
//     }
//   }
// }

// const logger2 = () => (next) => (action) => { 
//   console.log("OK2")
//   next(action)
// }

const store = createStore(
  combineReducers({
    currentUser: currentUserReducer,
    todos: todosReducer,
  }),
  {
    currentUser: inialCurrentUser,
    todos: initialTodos,
  },
  applyMiddleware(thunk)
);

export default store;

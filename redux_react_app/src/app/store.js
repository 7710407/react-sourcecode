import { createStore, combineReducers } from "redux";
import {
  currentUserReducer,
  inialCurrentUser,
} from "../features/currentUser/currentUserSlice";
import { initialTodos, todosReducer } from "../features/todos/todosSlice";

const store = createStore(
  combineReducers({
    currentUser: currentUserReducer,
    todos: todosReducer,
  }),
  {
    currentUser: inialCurrentUser,
    todos: initialTodos,
  }
);

export default store;

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import TodoForm from "./features/todos/TodoForm";
import TodoList from "./features/todos/TodoList";

function App() {
  const name = useSelector(function (state) {
    return state.currentUser.name;
  });

  const todo = useSelector(function (state) {
    return state.todos.map((todo) => {
      return todo.text;
    });
  });

  const dispatch = useDispatch();
  return (
    <>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(evt) => {
          dispatch({
            type: "edit-current-user-name",
            payload: {
              name: evt.target.value,
            },
          });
        }}
      />
      <div>
        <h1>{todo}</h1>
        <h1>Todos</h1>
        <TodoForm
          onAdd={(text) => {
            // setTodos([
            //   ...todos,
            //   { id: Math.random(), text: text, isCompleted: false },
            // ]);
            dispatch({
              type: "add",
              payload: {
                text: text,
              },
            });
          }}
        />
        <TodoList
          todos={todo}
          onDelete={(todo) => {
            dispatch({
              type: "delete",
              payload: {
                id: todo.id,
              },
            });
          }}
        />
        <h2>111</h2>
        <button>Clear finished</button>
      </div>
    </>
  );
}

export default App;

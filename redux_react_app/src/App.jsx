import "./App.css";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { selectName, editName, loadUser } from "./features/currentUser/currentUserSlice";
import { useEffect } from "react";
=======
// import { useState } from "react";
import TodoForm from "./features/todos/TodoForm";
import TodoList from "./features/todos/TodoList";
>>>>>>> 1bcc23f4e11ab78320d7d74e4f90848dc35fc176

function App() {
  const name = useSelector(selectName);

  const dispatch = useDispatch();
<<<<<<< HEAD
  
  useEffect(() => { 
    dispatch(loadUser())
  }, [])

=======
>>>>>>> 1bcc23f4e11ab78320d7d74e4f90848dc35fc176
  return (
    <>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(evt) => {
          dispatch(editName(evt.target.value));
        }}
      />
<<<<<<< HEAD
=======
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
>>>>>>> 1bcc23f4e11ab78320d7d74e4f90848dc35fc176
    </>
  );
}

export default App;

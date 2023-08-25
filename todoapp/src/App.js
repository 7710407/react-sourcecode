// import { useReducer } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";
import { useState } from "react";

function App() {
  function useReducer(reducer, initialState) { 
    const[state, setState] = useState(initialState)
    return [
      state, (action) => { 
        const newState = reducer(state, action)
        setState(newState)
      }
    ]
  }

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "text1",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "text2",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "text3",
      isCompleted: false,
    },
  ]);

  function reducer(state, action) { 
    if (action.type === 'add') {
      return [...state, { id: Math.random(), text: action.payload, isCompleted: false }]
    }
    else if (action.type === "delete") { 
      return state.filter((td)=> td.id !== action.payload.id)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
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
          todos={todos}
          onDelete={(todo) => {
            // setTodos(todos.filter((td) => td.id !== todo.id));
            dispatch({
              type: 'delete',
              payload: {
                id: todo.id,
              },
            })
          }}
          onChange={(newTodo) => {
            // setTodos(
            //   todos.map((todo) => {
            //     if (todo.id === newTodo.id) {
            //       return newTodo;
            //     }
            //     return todo;
            //   })
            // );
          }}
        />
        <TodoFooter
          todos={todos}
          onClearComp={() => {
            // setTodos(
            //   todos.filter((todo) => {
            //     return !todo.isCompleted;
            //   })
            // );
          }}
        />
      </header>
    </div>
  );
}

export default App;

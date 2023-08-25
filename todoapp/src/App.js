import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
  const [todos, setTodos] = useState([
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
  ])
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm onAdd={(text) => { 
          setTodos([...todos, {id: Math.random(), text: text, isCompleted: false},])
        }}/>
        <TodoList todos={todos}
          onDelete={(todo) => { 
            setTodos(todos.filter((td) => td.id !== todo.id))
          }}
          onChange={(newTodo) => { 
            setTodos(todos.map((todo) => {
              if (todo.id === newTodo.id) { 
                return newTodo
              }
              return todo;
            }))
          }}
        />
        <TodoFooter todos={todos} onClearComp={() => { 
          setTodos(todos.filter((todo) => { 
            return !todo.isCompleted
          }))
        }}/>
      </header>
    </div>
  );
}

export default App;

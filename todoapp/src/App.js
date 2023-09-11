import { useReducer } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
  // function useReducer(reducer, initialState) {
  //   const [state, setState] = useState(initialState);
  //   return [
  //     state,
  //     (action) => {
  //       const newState = reducer(state, action);
  //       setState(newState);
  //     },
  //   ];
  // }

  const [todos, dispatch] = useReducer(reducer, [
  ]);

  function reducer(state, action) {
    if (action.type === "add") {
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, isCompleted: false },
      ];
    } else if (action.type === "delete") {
      return state.filter((td) => td.id !== action.payload.id);
    } else if (action.type === "toggleCompleted") {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo
      });
    } else if(action.type === 'clearCompleted') {
      return state.filter((todo) => !todo.isCompleted)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm
          onAdd={(text) => {
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
            dispatch({
              type: "delete",
              payload: {
                id: todo.id,
              },
            });
          }}
          onChange={(todo) => {
              dispatch({
                type : "toggleCompleted",
                payload: {
                  id: todo.id
                }
              })
          }}
        />
        <TodoFooter
          todos={todos}
          onClearComp={() => {
            dispatch({
              type: 'clearCompleted'
            })
          }}
        />
      </header>
    </div>
  );
}

export default App;

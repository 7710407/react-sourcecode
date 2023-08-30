import "./App.css";
import { useSelector, useDispatch } from "react-redux";

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
        dispatch({})<h1>{todo}</h1>
        <h1>Todos</h1>
        <input
          type="text"
          value={text}
          onChange={(evt) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={(evt) => {
            debugger;
            dispatch({
              type: "todo-add",
              payload: {
                todo: {
                  id: Math.random(),
                  text: evt.target.value,
                  isComplete: false,
                },
              },
            });
          }}
        >
          Add
        </button>
        <h2>111</h2>
        <button>Clear finished</button>
      </div>
    </>
  );
}

export default App;

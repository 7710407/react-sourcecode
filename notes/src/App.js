import { useReducer } from "react";
import "./App.css";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

function App() {
  const [notes, dispatch] = useReducer(reducer, []);

  function reducer(state, action) {
    if (action.type === "add") {
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          text: action.payload.text,
        },
      ];
    } else if (action.type === "delete") {
      return state.filter((td) => td.id !== action.payload.id);
    } else if (action.type === "edit") {
      // state.note
      // if (state[1].id === action.payload.id) {
      //   const message = "Enter new description for " + state.note.title + ".";
      //   state.note.text = prompt(message);
      //   return state.note;
      // }
      // return state.note;
      return state.map((note) => {
        if (note.id === action.payload.id) {
          const message = "Enter new description for " + note.title + ".";
          note.text = prompt(message);
          return note;
        }
        return note;
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <NoteForm
          onAdd={(title, text) => {
            dispatch({
              type: "add",
              payload: {
                title: title,
                text: text,
              },
            });
          }}
        />
        <h1>Notes</h1>
        <NoteList
          notes={notes}
          onDelete={(note) => {
            dispatch({
              type: "delete",
              payload: {
                id: note.id,
              },
            });
          }}
          onEdit={(note) => {
            dispatch({
              type: "edit",
              payload: {
                id: note.id,
              },
            });
          }}
        />
      </header>
    </div>
  );
}

export default App;

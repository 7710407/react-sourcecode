import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectName, editName, loadUser } from "./features/currentUser/currentUserSlice";
import { useEffect } from "react";

function App() {
  const name = useSelector(selectName);

  const dispatch = useDispatch();
  
  useEffect(() => { 
    dispatch(loadUser())
  }, [])

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
    </>
  );
}

export default App;


import { loadCurrentUser } from "./currentUserAPI";

export function currentUserReducer(state = {}, action) {
  if (action.type === "edit-current-user-name") {
    return {
      name: action.payload.name,
    };
  }
  return state;
}

export const inialCurrentUser = {
  name: "John Doe",
};

//action creator
export function editName(newName) {
  return {
    type: "edit-current-user-name",
    payload: {
      name: newName,
    },
  };
}

//action creator
export function loadUser() { 
  return (dispatch, getState) => { 
    loadCurrentUser().then((loadedUser) => { dispatch(editName(loadedUser.name)) })
  }
}

export function selectName(state) {
  return state.currentUser.name;
}

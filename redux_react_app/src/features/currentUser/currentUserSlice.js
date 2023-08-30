
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
}
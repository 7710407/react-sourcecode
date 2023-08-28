import { legacy_createStore as createStore } from "redux";

const store = createStore(
  function (state, action) {
    if (action.type === "edit-current-user-name") {
      return {
        ...state,
        currentUser: {
          name: action.payload.name,
        },
      };
    }
    return state;
  },
  {
    currentUser: {
      name: "John 111",
    },
  },
//   {
//     todos: [
//       {
//         id: Math.random(),
//         text: "text1",
//         isCompleted: false,
//       },
//       {
//         id: Math.random(),
//         text: "text2",
//         isCompleted: false,
//       },
//       {
//         id: Math.random(),
//         text: "text3",
//         isCompleted: false,
//       },
//     ],
//   }
);

export default store;

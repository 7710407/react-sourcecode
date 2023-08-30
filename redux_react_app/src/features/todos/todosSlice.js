export function todosReducer(state = [], action) {
    if (action.type === "todo-add") {
        return {
            todo
        }
    }
    return state;
}

export const initialTodos = [
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
  ]

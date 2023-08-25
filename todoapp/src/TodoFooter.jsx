import React from "react";

const TodoFooter = ({ todos, onClearComp }) => {
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div>
      <span>
        {completedTodos}/{todos.length} completed
      </span>
      <button onClick={onClearComp}>Clear all completed</button>
    </div>
  );
};

export default TodoFooter;

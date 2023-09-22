import React from "react";

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div>
      <label>
        {/* <input
          type="checkbox"
          checked={note.isCompleted}
          onChange={(e) => {
            onChange({
              ...note,
              isCompleted: e.target.checked,
            });
          }}
        /> */}
        <h4>{note.title}</h4>
        <h5>{note.text}</h5>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note)}>Delete</button>
      </label>
    </div>
  );
};

export default NoteItem;

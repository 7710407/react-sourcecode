import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default NoteList;

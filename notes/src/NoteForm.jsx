import React, { useState } from "react";

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(title, text);
        setTitle("");
        setText("");
      }}
    >
      <h4>Title</h4>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <h4>Description</h4>
      <textarea
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>
        <button>Add</button>
      </p>
    </form>
  );
};

export default NoteForm;

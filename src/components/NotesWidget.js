import React, { useEffect, useState } from "react";

const defaultNote = `Hi, I'm Sai Prathap.
  I am a Frontend Developer passionate about React.js.
  I enjoy building responsive and user-friendly web applications.
  I continuously improve my skills in JavaScript, React, and UI design.
  My goal is to start my career as a Software Engineer.`;

const NotesWidget = () => {
  const [note, setNote] = useState(defaultNote);

  useEffect(() => {
    const saved = localStorage.getItem("notes");

    if (saved) {
      setNote(saved);
    } else {
      localStorage.setItem("notes", defaultNote);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setNote(value);
    localStorage.setItem("notes", value);
  };

  return (
    <div
      style={{
        background: "#F6D365",
        borderRadius: "20px",
        padding: "20px",
        minHeight: "250px",
      }}
    >
      <h1>All Notes</h1>

      <textarea
        value={note}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "180px",
          border: "none",
          background: "transparent",
          resize: "none",
          marginTop: "20px",
          outline: "none",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      />
    </div>
  );
};

export default NotesWidget;
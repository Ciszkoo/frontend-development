import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

const NotesRoute = ({ notes }) => {
  const navigate = useNavigate();

  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id}>
            {note.name} {note.content}
            <button onClick={() => navigate(`/notes/${note.id}`)}>
              Szczegóły
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(NotesRoute);

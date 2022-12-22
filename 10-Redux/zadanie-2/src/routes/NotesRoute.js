import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import { deleteNote } from "../actions/notesActions";

const NotesRoute = ({ notes, deleteNote }) => {
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
            <button onClick={() => deleteNote(note.id)}>Usuń</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesRoute);

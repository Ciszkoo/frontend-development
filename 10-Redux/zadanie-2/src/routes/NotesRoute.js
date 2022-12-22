import React from "react";
import { connect } from "react-redux";

const NotesRoute = ({notes}) => {
  return (
    <ul>
      {notes.map((note) => {
        return <li key={note.id}>{note.name} {note.content}</li>;
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
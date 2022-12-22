import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNote } from "../actions/notesActions";

const AddNoteRoute = ({ addNote }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addNote({
      id: uuidv4(),
      name: data.name,
      content: data.content,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nazwa notatki:</label>
      <input type="text" id="name" {...register("name")} />
      <label htmlFor="content">Treść notatki:</label>
      <textarea id="content" {...register("content")} />
      <button type="submit">Dodaj notatkę</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
  };
};

export default connect(null, mapDispatchToProps)(AddNoteRoute);

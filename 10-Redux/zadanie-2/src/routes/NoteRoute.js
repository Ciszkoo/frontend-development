import React from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { editNote } from "../actions/notesActions";

const Wrapper = () => {
  const { id } = useParams();

  return <VisibleTodo id={id} />;
};

const Note = ({ note, editNote }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    editNote({
      id: note.id,
      name: data.name,
    });
    reset();
  };

  return (
    <>
      <p>{JSON.stringify(note)}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nowa nazwa notatki:</label>
        <input type="text" id="name" {...register("name")} />
        <button type="submit">Zmień nazwę</button>
      </form>
    </>
  );
};

const mapStateToProps = (state, { id }) => {
  return {
    note: state.notes.find((note) => note.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (data) => dispatch(editNote(data)),
  };
};

const VisibleTodo = connect(mapStateToProps, mapDispatchToProps)(Note);

export default Wrapper;

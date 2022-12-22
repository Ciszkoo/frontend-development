import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { editTodo } from "../actions/todoActions";

const Wrapper = () => {
  const { id } = useParams();

  return <VisibleTodo id={id} />;
};

const Todo = ({ todo, editTodo }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    editTodo({
      id: todo.id,
      name: data.name,
    });
    reset();
  }

  return (
    <>
      <p>{JSON.stringify(todo)}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nowa nazwa zadania:</label>
        <input type="text" id="name" {...register('name')} />
        <button type="submit">Zmień nazwę</button>  
      </form>      
    </>
  );
};

const mapStateToProps = (state, { id }) => {
  return {
    todo: state.todos.find((todo) => todo.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTodo: (data) => dispatch(editTodo(data)),
  };
}

const VisibleTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default Wrapper;

import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';

const TodoForm = ({ addTodo }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addTodo({
      id: uuidv4(),
      name: data.name,
      date: data.date,
      done: false,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nazwa zadania:</label>
      <input type="text" id="name" {...register('name')} />
      <label htmlFor="date">Data zakończenia zadania:</label>
      <input type="date" id="date" {...register('date')} />
      <button type="submit">Dodaj zadanie</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);

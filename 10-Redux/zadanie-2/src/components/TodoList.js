import React from 'react';
import { connect } from 'react-redux';

import { doneTodo, deleteTodo } from '../actions/todoActions';

const TodoList = ({ todos, doneTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {`${todo.id} ${todo.name} ${todo.date} ${
              !todo.done ? 'do zrobienia' : 'zrobione'
            }`}
            <button onClick={() => deleteTodo(todo.id)}>Usuń</button>
            {!todo.done && (
              <button onClick={() => doneTodo(todo.id)}>Zrobione</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doneTodo: (id) => dispatch(doneTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

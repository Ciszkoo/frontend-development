import React from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoRoute = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoRoute;

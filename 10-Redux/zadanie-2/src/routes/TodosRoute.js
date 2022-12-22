import React from 'react';
import { useNavigate } from 'react-router';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodosRoute = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <button onClick={() => navigate('/notes/add')}>Dodaj notatki</button>
      </div>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodosRoute;

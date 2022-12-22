import React from 'react';
import { useParams } from 'react-router-dom';

const Todo = () => {
  const { id } = useParams();

  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default Todo;

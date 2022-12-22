export const TODO_ADD = 'TODO_ADD';
export const TODO_DONE = 'TODO_DONE';
export const TODO_DELETE = 'TODO_DELETE';

export const addTodo = (payload) => {
  return {
    type: TODO_ADD,
    payload,
  };
};

export const doneTodo = (payload) => {
  return {
    type: TODO_DONE,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: TODO_DELETE,
    payload,
  };
};

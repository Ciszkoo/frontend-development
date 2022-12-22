import { TODO_ADD, TODO_DONE, TODO_DELETE } from '../actions/todoActions';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    case TODO_DONE:
      const newState = state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: true } : todo
      );
      return newState;
    case TODO_DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;

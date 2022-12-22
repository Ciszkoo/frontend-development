import { NOTE_ADD } from '../actions/notesActions';

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case NOTE_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default notesReducer;
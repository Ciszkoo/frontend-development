import { NOTE_ADD, NOTE_DELETE } from "../actions/notesActions";

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case NOTE_ADD:
      return [...state, action.payload];
    case NOTE_DELETE:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

export default notesReducer;

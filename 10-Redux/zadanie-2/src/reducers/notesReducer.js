import { NOTE_ADD, NOTE_DELETE, NOTE_EDIT } from "../actions/notesActions";

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case NOTE_ADD:
      return [...state, action.payload];
    case NOTE_DELETE:
      return state.filter((note) => note.id !== action.payload);
    case NOTE_EDIT:
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, name: action.payload.name }
          : note
      );
    default:
      return state;
  }
};

export default notesReducer;

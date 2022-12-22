export const NOTE_ADD = "NOTE_ADD";
export const NOTE_DELETE = "NOTE_DELETE";
export const NOTE_EDIT = "NOTE_EDIT";

export const addNote = (payload) => {
  return {
    type: NOTE_ADD,
    payload,
  };
};

export const deleteNote = (payload) => {
  return {
    type: NOTE_DELETE,
    payload,
  };
};

export const editNote = (payload) => {
  return {
    type: NOTE_EDIT,
    payload,
  };
}

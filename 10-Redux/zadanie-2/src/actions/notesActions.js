export const NOTE_ADD = "NOTE_ADD";
export const NOTE_DELETE = "NOTE_DELETE";

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

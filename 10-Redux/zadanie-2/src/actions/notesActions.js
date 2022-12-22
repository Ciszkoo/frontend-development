export const NOTE_ADD = "NOTE_ADD";

export const addNote = (payload) => {
  return {
    type: NOTE_ADD,
    payload,
  };
}
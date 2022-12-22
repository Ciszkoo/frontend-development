import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./reducers/notesReducer";
import todoReducer from "./reducers/todoReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    notes: notesReducer,
  },
});

export default store;

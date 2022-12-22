import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";

import store from "./store";
import TodosRoute from "./routes/TodosRoute";
import TodoWrapper from "./routes/TodoRoute";
import AddNoteRoute from "./routes/AddNoteRoute";
import NotesRoute from "./routes/NotesRoute";
import NoteWrapper from "./routes/NoteRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodosRoute />,
  },
  {
    path: "todos/:id",
    element: <TodoWrapper />,
  },
  {
    path: "notes",
    element: <NotesRoute />,
  },
  {
    path: "notes/add",
    element: <AddNoteRoute />
  },
  {
    path: "notes/:id",
    element: <NoteWrapper />,
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";

import store from "./store";
import TodoRoute from "./routes/TodoRoute";
import Todo from "./components/Todo";
import Wrapper from "./components/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoRoute />,
  },
  {
    path: "todos/:id",
    element: <Wrapper />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);

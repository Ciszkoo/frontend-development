import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";

import store from "./store";
import TodoRoute from "./routes/TodoRoute";
import Todo from "./components/Todo";

const StoreProviderLayout = () => (
  <StoreProvider store={store}>
    <Outlet />
  </StoreProvider>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoRoute />,
  },
  {
    path: "todo",
    element: <p>1</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);

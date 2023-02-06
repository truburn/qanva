import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import GraphEditor from "pages/editor/GraphEditor";
import GraphList from "pages/list/GraphList";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        loader: () => redirect("/editor"),
      },
      {
        path: "editor",
        element: <GraphEditor />,
      },
      {
        path: "graphs",
        element: <GraphList />,
      },
    ],
  },
]);

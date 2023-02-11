import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { GraphEditor } from "pages/GraphEditor";
import { GraphList } from "pages/GraphList";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        loader: () => redirect("/editor"),
      },
      {
        path: "editor/:id?/:filename?",
        element: <GraphEditor />,
        loader: async (props) => {
          console.log("Editor Props", props);
          return null;
        },
      },
      {
        path: "graphs",
        element: <GraphList />,
      },
    ],
  },
]);

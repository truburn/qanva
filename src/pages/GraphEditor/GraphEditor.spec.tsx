import React from "react";
import { render, screen } from "utils/tests";
import { NewGraph, EditGraph } from "./GraphEditor.stories";

test("Create a new graph", () => {
  render(<NewGraph />);
  const text = screen.getByText(/Graph Editor/);
  expect(text).toBeInTheDocument();
});

test("Edit an existing graph", () => {
  render(<EditGraph />);
  const text = screen.getByText(/Graph Editor/);
  expect(text).toBeInTheDocument();
});

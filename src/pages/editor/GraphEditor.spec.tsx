import React from "react";
import { render, screen } from "@testing-library/react";
import { GraphEditor } from "./GraphEditor.stories";

test("renders in view", () => {
  render(<GraphEditor />);
  const text = screen.getByText(/Graph Editor/);
  expect(text).toBeInTheDocument();
});

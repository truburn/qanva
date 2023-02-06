import React from "react";
import { render, screen } from "@testing-library/react";
import { GraphList } from "./GraphList.stories";

test("renders in view", () => {
  render(<GraphList />);
  const text = screen.getByText(/Graph List/);
  expect(text).toBeInTheDocument();
});

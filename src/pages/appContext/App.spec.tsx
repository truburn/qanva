import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App.stories";

test("renders in view", () => {
  render(<App />);
  const text = screen.getByText(/App Wrapper/);
  expect(text).toBeInTheDocument();
});

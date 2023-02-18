import { render, screen } from "utils/tests";
import { NewGraph, EditGraph } from "./GraphEditor.stories";

test("Create a new graph", () => {
  const { render: GraphEditor } = NewGraph;
  render(<GraphEditor />);
  const text = screen.getByText(/Graph Editor/);
  expect(text).toBeInTheDocument();
});

test("Edit an existing graph", () => {
  const { render: GraphEditor } = EditGraph;
  render(<GraphEditor />);
  const text = screen.getByText(/Graph Editor/);
  expect(text).toBeInTheDocument();
});

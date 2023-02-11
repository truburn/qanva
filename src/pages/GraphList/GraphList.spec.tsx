import { render, screen } from "utils/tests";
import { GraphList } from "./GraphList.stories";

test("renders in view", () => {
  render(<GraphList />);
  const text = screen.getByText(/Graph List/);
  expect(text).toBeInTheDocument();
});

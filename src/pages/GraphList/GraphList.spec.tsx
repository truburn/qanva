import { render, screen } from "utils/tests";
import { Default } from "./GraphList.stories";

test("renders in view", () => {
  const { render: GraphList } = Default;
  render(<GraphList />);
  const text = screen.getByText(/Graph List/);
  expect(text).toBeInTheDocument();
});

describe("Graph List", () => {
  it("should render in view", () => {
    const { render: GraphList } = Default;
    render(<GraphList />);
    const text = screen.getByText(/Graph List/);
    expect(text).toBeInTheDocument();
  });
});

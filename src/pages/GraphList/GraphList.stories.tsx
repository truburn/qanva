import type { Meta } from "@storybook/react";
import { GraphList } from "pages/GraphList";

const meta: Meta<typeof GraphList> = {
  component: GraphList,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {
  render: () => <GraphList />,
};

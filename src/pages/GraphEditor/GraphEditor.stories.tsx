import type { Meta } from "@storybook/react";
import { GraphEditor } from "pages/GraphEditor";

const meta: Meta<typeof GraphEditor> = {
  component: GraphEditor,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const NewGraph = {
  render: () => <GraphEditor />,
  parameters: {
    reactRouter: {
      routePath: "/editor",
    },
  },
};

export const EditGraph = {
  render: () => <GraphEditor />,
  parameters: {
    reactRouter: {
      routePath: "/editor/:id/:filename",
      routeParams: { id: 1, filename: "My Graph" },
    },
  },
};

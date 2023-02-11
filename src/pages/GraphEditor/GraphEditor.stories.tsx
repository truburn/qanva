import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GraphEditor as GraphEditorComponent } from "pages/GraphEditor";

export default {
  title: "Pages/GraphEditor",
  component: GraphEditorComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof GraphEditorComponent>;

const Template: ComponentStory<typeof GraphEditorComponent> = (args) => <GraphEditorComponent />;

export const NewGraph = Template.bind({});
NewGraph.parameters = {
  reactRouter: {
    routePath: "/editor",
  },
};

export const EditGraph = Template.bind({});
EditGraph.parameters = {
  reactRouter: {
    routePath: "/editor/:id/:filename",
    routeParams: { id: 1, filename: "My Graph" },
  },
};

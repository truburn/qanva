import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GraphList as GraphListComponent } from "pages/GraphList";

export default {
  title: "Pages/GraphList",
  component: GraphListComponent,
  parameters: {
    layout: "fullscreen",
    reactRouter: {
      routePath: "/graphs",
    },
  },
} as ComponentMeta<typeof GraphListComponent>;

const Template: ComponentStory<typeof GraphListComponent> = (args) => <GraphListComponent />;

export const GraphList = Template.bind({});

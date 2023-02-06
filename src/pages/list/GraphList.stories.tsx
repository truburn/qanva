import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GraphListComponent from "./GraphList";

export default {
  title: "Pages/GraphList",
  component: GraphListComponent,
} as ComponentMeta<typeof GraphListComponent>;

const Template: ComponentStory<typeof GraphListComponent> = (args) => <GraphListComponent />;

export const GraphList = Template.bind({});

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GraphEditorComponent from "./GraphEditor";

export default {
  title: "Pages/GraphEditor",
  component: GraphEditorComponent,
} as ComponentMeta<typeof GraphEditorComponent>;

const Template: ComponentStory<typeof GraphEditorComponent> = (args) => <GraphEditorComponent />;

export const GraphEditor = Template.bind({});

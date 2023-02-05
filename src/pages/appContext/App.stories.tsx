import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppComponent from "./App";

export default {
  title: "Pages/App",
  component: AppComponent,
} as ComponentMeta<typeof AppComponent>;

const Template: ComponentStory<typeof AppComponent> = (args) => <AppComponent />;

export const App = Template.bind({});

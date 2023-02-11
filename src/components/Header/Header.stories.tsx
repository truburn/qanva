import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header as HeaderComponent } from "components/Header";

export default {
  title: "Components/Header",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => <HeaderComponent />;

/**
 * Header with no content, just the logo
 */
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    storyDescription: "Header with no content, just the logo",
  },
};

/**
 * Header with input field
 */
export const InputField = Template.bind({});
InputField.parameters = {
  docs: {
    storyDescription: "Header with input field",
  },
};

/**
 * Header with buttons
 */
export const Buttons = Template.bind({});
Buttons.parameters = {
  docs: {
    storyDescription: "Header with buttons",
  },
};

/**
 * Header with input and buttons
 */
export const InputAndButtons = Template.bind({});
InputAndButtons.parameters = {
  docs: {
    storyDescription: "Header with input and buttons",
  },
};

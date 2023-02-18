import type { Meta } from "@storybook/react";
import { Header } from "components/Header";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

/**
 * Header with no content, just the logo
 */
export const Default = {
  render: () => <Header />,
};

/**
 * Header with input field
 */
export const InputField = {
  render: () => <Header />,
};

/**
 * Header with buttons
 */
export const Buttons = {
  render: () => <Header />,
};

/**
 * Header with input and buttons
 */
export const InputAndButtons = {
  render: () => <Header />,
};

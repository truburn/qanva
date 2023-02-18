import type { Meta } from "@storybook/react";
import { TextField } from "atoms/Forms";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;

export const Default = {
  render: () => <TextField />,
};

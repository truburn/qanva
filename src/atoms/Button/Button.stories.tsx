import type { Meta } from "@storybook/react";
import { Button } from "atoms/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default = {
  render: (args: Record<string, any>) => <Button {...args} />,
  args: {
    children: "Button",
  },
};

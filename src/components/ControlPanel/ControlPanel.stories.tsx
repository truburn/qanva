import type { Meta } from "@storybook/react";
import { ControlPanel } from "components/ControlPanel";

const meta: Meta<typeof ControlPanel> = {
  component: ControlPanel,
};

export default meta;

export const Default = {
  render: () => <ControlPanel />,
};

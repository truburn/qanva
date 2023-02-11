import { createStyles, ThemeProps } from "utils/theme";

export const controlPanelStyles = createStyles("ControlPanel", (theme: ThemeProps) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

import { createStyles, ThemeProps } from "utils/theme";

interface StyleProps {}

export const controlPanelStyles = (props?: StyleProps) => {
  const classes = createStyles("ControlPanel", (theme: ThemeProps) => ({
    root: {
      display: "flex",
      flexDirection: "column",
    },
  }));
  return classes();
};

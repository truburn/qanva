import { createStyles, ThemeProps } from "utils/theme";

interface StyleProps {}

export const graphEditorStyles = (props?: StyleProps) => {
  const classes = createStyles("GraphEditor", (theme: ThemeProps) => ({
    root: {},
  }));

  return classes();
};

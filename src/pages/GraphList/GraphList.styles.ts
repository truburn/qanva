import { createStyles, ThemeProps } from "utils/theme";

interface StyleProps {}

export const graphListStyles = (props?: StyleProps) => {
  const classes = createStyles("GraphList", (theme: ThemeProps) => ({
    root: {},
  }));

  return classes();
};

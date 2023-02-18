import { createStyles, ThemeProps } from "utils/theme";

interface StyleProps {}

export const textFieldStyles = (props?: StyleProps) => {
  const classes = createStyles("TextField", (theme: ThemeProps) => ({
    root: {},
  }));
  return classes();
};

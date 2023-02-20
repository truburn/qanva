import { createStyles, ThemeProps } from "utils/theme";
import { ButtonVariant, ButtonProps } from "atoms/Button";

export const buttonStyles = (props: ButtonProps) => {
  const classes = createStyles("Button", (theme: ThemeProps) => {
    return {
      root: {},
    };
  });

  return classes();
};
